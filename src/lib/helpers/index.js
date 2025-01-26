import axios from "axios";
import { toast } from "sonner";
import { getSession, removeSession, setSession } from "../session";

// Constants
export const REGISTER_EMAIL_KEY = "register_email";
export const EMAIL_VERIFIED_KEY = "email_verified";

// Utility Function
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function goToLogin() {
  removeSession();
  const pathname = window.location.pathname;
  window.location.replace("/login?next=" + pathname);
}

// Configure Axios Defaults
export const baseURL = "https://connectize.co";
  // process.env.NODE_ENV === "development"
  //   ? "http://127.0.0.1:8000"
  //   : "https://connectize.co";
axios.defaults.withCredentials = true;

// Create Axios instance
const apiClient = axios.create({
  baseURL,
  withCredentials: true,
});

let isRefreshing = false;
let refreshPromise = null;

apiClient.interceptors.request.use(async (config) => {
  const session = getSession();

  if (session?.tokens?.access) {
    config.headers.Authorization = `Bearer ${session.tokens.access}`;
  }

  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const errorCode = error?.response?.data?.code;

    if (errorCode === "token_not_valid" && !originalRequest._retry) {
      if (!isRefreshing) {
        isRefreshing = true;
        refreshPromise = refreshToken();
      }

      try {
        const newAccessToken = await refreshPromise;
        isRefreshing = false;
        refreshPromise = null;

        if (newAccessToken) {
          originalRequest._retry = true;
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return apiClient(originalRequest);
        }
      } catch (refreshError) {
        isRefreshing = false;
        refreshPromise = null;
        removeSession();
        toast.info("User session has been reset. Please login again.");
        goToLogin();
        return Promise.reject(refreshError);
      }
    }

    const errorMsg = extractErrorMessage(error?.response?.data);
    if (errorMsg) {
      toast.error(errorMsg);
      console.error("API request failed:", error);
    } else if (errorMsg === "Authentication credentials were not provided.") {
      goToLogin();
    }
    return Promise.reject(error);
  }
);

export async function refreshToken() {
  const session = getSession();

  if (!session?.tokens?.refresh) {
    return undefined;
  }

  try {
    const { data } = await axios.post(`${baseURL}/api/auth/refresh-token/`, {
      refresh: session.tokens.refresh,
    });

    const newTokens = {
      access: data.access,
      refresh: data.refresh,
    };

    setSession({
      ...session,
      tokens: newTokens,
    });

    return newTokens.access;
  } catch (error) {
    throw error;
  }
}

export async function makeApiRequest({
  url,
  method,
  data,
  resetForm,
  type = "",
  contentType = "application/json",
  params,
}) {
  try {
    const response = await apiClient({
      url,
      method,
      data,
      headers: {
        "Content-Type": contentType,
      },
      params,
    });

    const responseMessage = response.data.message;

    if (response.status >= 200 && response.status <= 204) {
      resetForm?.();
      console.log("Request succeeded:", response.data);

      if (response.data.success && responseMessage) {
        toast.success(responseMessage);
      }
      return response.data;
    }
  } catch (error) {
    console.error("API request failed:", error);
  }
}

function extractErrorMessage(errorResponse) {
  const apiErrorResponse = errorResponse?.errors?.[0];
  return (
    apiErrorResponse?.message ||
    apiErrorResponse?.__all__?.[0] ||
    apiErrorResponse?.username?.[0] ||
    apiErrorResponse?.email?.[0] ||
    apiErrorResponse?.password2?.[0] ||
    apiErrorResponse?.gender?.[0] ||
    apiErrorResponse?.non_field_errors?.[0] ||
    errorResponse?.company_name?.[0] ||
    errorResponse?.message ||
    errorResponse?.detail ||
    null
  );
}
