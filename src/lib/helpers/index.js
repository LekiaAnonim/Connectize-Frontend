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

// Configure Axios Defaults
export const baseURL = "http://localhost:8000";

export async function refreshTokenIfNeeded() {
  const session = getSession();

  try {
    if (session?.tokens?.refresh && session?.tokens) {
      const { data } = await axios.post(baseURL + "/api/auth/refresh-token/", {
        refresh: session.tokens.refresh,
      });

      setSession({
        ...session,
        tokens: {
          access: data.access,
          refresh: data.refresh,
        },
      });

      return { Authorization: "Bearer " + data.access };
    }
    return undefined;
  } catch (error) {
    if (error?.response?.data?.code === "token_not_valid") {
      toast.info("User session has been reset, kindly login again");
      removeSession();
      const pathname = window.location.pathname;
      window.location.replace("/login?next=" + pathname);
      return;
    }
  }
}

export async function makeApiRequest({
  url,
  method,
  data,
  resetForm,
  type,
  contentType = "application/json",
}) {
  try {
    const authorization = await refreshTokenIfNeeded();

    const response = await axios({
      url: `${baseURL}/${url}`,
      method,
      data,
      headers: { ...authorization, "Content-Type": contentType },
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
  }
}
