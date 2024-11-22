import axios from "axios";
import { toast } from "sonner";
import { getSession, setSession } from "../session";

// Constants
export const REGISTER_EMAIL_KEY = "register_email";
export const EMAIL_VERIFIED_KEY = "email_verified";

// Utility Function
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Configure Axios Defaults
axios.defaults.baseURL = "http://localhost:8000"; // Django API URL
axios.defaults.withCredentials = true;

export async function refreshTokenIfNeeded() {
  const session = getSession();

  if (session?.tokens?.refresh && session?.tokens) {
    try {
      const { data } = await axios.post("api/auth/refresh-token/", {
        refresh: session.tokens.refresh,
      });

      setSession({
        ...session,
        tokens: {
          access: data.access,
          refresh: data.refresh,
        },
      });

      console.log("tokens refreshed");

      return { Authorization: "Bearer " + data.access };
    } catch (error) {
      console.error("Token refresh failed:", error);
      throw new Error("Failed to refresh token");
    }
  }
  return undefined;
}

setTimeout(() => refreshTokenIfNeeded(), 250000);

export async function makeApiRequest({ url, method, data, resetForm, type }) {
  try {
    const headers = await refreshTokenIfNeeded();

    const response = await axios({
      url: `/${url}`,
      method,
      data,
      headers,
    });

    if (response.status >= 200 && response.status <= 204) {
      resetForm?.();
      console.log("Request succeeded:", response.data);

      if (response.data.success && response.data.message)
        toast.success(response.data.message);
      return response.data;
    }
  } catch (error) {
    const errorMsg =
      error?.response?.data?.errors?.[0]?.message ||
      error?.response?.data?.errors?.[0]?.__all__?.[0] ||
      error?.response?.data?.errors?.[0]?.username?.[0] ||
      error?.response?.data?.errors?.[0]?.email?.[0] ||
      error?.response?.data?.errors?.[0]?.password2?.[0] ||
      error?.response?.data?.errors?.[0]?.gender?.[0] ||
      error?.response?.data?.errors?.[0]?.non_field_errors?.[0] ||
      error?.response?.data?.detail ||
      "Something went wrong!";

    console.error("API request failed:", error);
    toast.error(errorMsg);
    throw error;
  }
}
