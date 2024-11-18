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
axios.defaults.baseURL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:8000"; // Django API URL
axios.defaults.withCredentials = true;

async function refreshTokenIfNeeded() {
  const session = getSession();
  console.log(session);

  if (session?.tokens.refresh && session?.tokens) {
    try {
      const { data: apiResponse } = await axios.post("api/auth/refresh-token", {
        refresh: session.tokens.refresh,
      });

      const { result } = apiResponse;
      console.log("Refresh tokens", result);

      setSession({
        ...session,
        tokens: {
          access: result.access,
          refresh: result.refresh,
        },
      });

      return { Authorization: "Bearer " + result.access };
    } catch (error) {
      console.error("Token refresh failed:", error);
      throw new Error("Failed to refresh token");
    }
  }
  return undefined;
}

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
    } else {
      throw new Error("Unknown error occurred");
    }
  } catch (error) {
    const errorMsg =
      error?.response?.data?.errors?.[0].__all__?.[0] ||
      error?.response?.data?.errors?.username?.[0] ||
      error?.response?.data?.email?.[0] ||
      error?.response?.data?.errors?.email?.[0] ||
      error?.response?.data?.non_field_errors?.[0] ||
      error?.response?.data?.detail ||
      "Something went wrong!";

    console.error("API request failed:", error);
    toast.error(errorMsg);
    throw error;
  }
}
