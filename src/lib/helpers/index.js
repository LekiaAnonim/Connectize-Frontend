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
export const baseURL = "https://connectize.co"; // https://connectize.co/
axios.defaults.withCredentials = true;

// Mutex for Refresh Token
let isRefreshing = false;
let refreshPromise = null;

let retries = 0;

// let retries = 0;

export async function refreshTokenIfNeeded() {
  const session = getSession();

  if (!session?.tokens?.refresh) {
    return undefined;
  }

  if (isRefreshing) {
    return refreshPromise; // Prevent re-running refresh if already in progress
  }

  isRefreshing = true;

  try {
    refreshPromise = (async () => {
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

      return "Bearer " + newTokens.access;
    })();

    const authorizationHeader = await refreshPromise;
    return { Authorization: authorizationHeader };
  } catch (error) {
    retries++;
    console.log(`Refresh token attempt #${retries}`);

    if (retries === 5) {
      removeSession();
      toast.info("User session has been reset. Please login again.");
      goToLogin();
      return;
    }

    throw error;
  } finally {
    isRefreshing = false;
    refreshPromise = null;
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
    const authorization = await refreshTokenIfNeeded();

    if (!authorization && !type.startsWith("auth")) {
      goToLogin();
      return;
    }

    const response = await axios({
      url: `${baseURL}/${url}`,
      method,
      data,
      headers: {
        ...authorization,
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
    const errorCode = error?.response?.data?.code;

    if (errorCode === "token_not_valid") {
      // Retry after refreshing token
      try {
        const authorization = await refreshTokenIfNeeded();
        if (authorization) {
          // Retry the original request
          const response = await axios({
            url: `${baseURL}/${url}`,
            method,
            data,
            headers: {
              ...authorization,
              "Content-Type": contentType,
            },
            params,
          });

          if (response.status >= 200 && response.status <= 204) {
            resetForm?.();
            console.log("Request succeeded after retry:", response.data);
            toast.success(response.data.message);
            return response.data;
          }
        }
      } catch (retryError) {
        // Handle failure of retry attempt here
        console.error("Token refresh failed:", retryError);
      }
    }

    // Handle general errors
    const errorResponse = error?.response?.data;
    const errorMsg = extractErrorMessage(errorResponse);

    console.error("API request failed:", error);
    if (errorResponse) toast.error(errorMsg);
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
    errorResponse?.detail ||
    "Something went wrong!"
  );
}
