import { connectizeApiBaseUrl } from "./data";
import axios from "axios";
import { toast } from "sonner";
import { getSession } from "./session";

export const REGISTER_EMAIL_KEY = "register_email";
export const EMAIL_VERIFIED_KEY = "email_verified";

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function makeApiRequest({ url, method, data, resetForm, type }) {
  try {
    const { data: apiResponse } = await axios({
      url: `${connectizeApiBaseUrl}/${url}`,
      method,
      data,
      headers:
        getSession() && type !== "refresh-token"
          ? {
              Authorization: `Bearer ${getSession()?.token}`,
            }
          : undefined,
    });

    const { result, error, success } = apiResponse;

    if (success) {
      resetForm?.();
      return result;
    } else {
      const errorMessage = error?.[0]?.message || "Unknown error occurred";
      throw new Error(errorMessage);
    }
  } catch (error) {
    const errorMsg =
      error?.response?.data?.errors?.[0]?.message || "Something went wrong!";
    toast.error(errorMsg);
    console.error("API request failed:", error);
  }
}
