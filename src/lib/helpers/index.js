import { connectizeApiBaseUrl } from "../data";
import axios from "axios";
import { toast } from "sonner";
import { getSession } from "../session";

export const REGISTER_EMAIL_KEY = "register_email";
export const EMAIL_VERIFIED_KEY = "email_verified";

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function makeApiRequest({ url, method, data, resetForm, type }) {
  try {
    const response = await axios({
      url: `${connectizeApiBaseUrl}${url}`,
      method,
      data,
      headers:
        getSession() && type !== "refresh-token"
          ? {
              Authorization: `Token ${getSession()}`,
            }
          : undefined,
    });

    if (data) {
      resetForm?.();

      return response.data;
    } else {
      const errorMessage = "Unknown error occurred";
      throw new Error(errorMessage);
    }
  } catch (error) {
    const errorMsg =
      error?.response?.data?.username?.[0] ||
      error?.response?.data?.non_field_errors?.[0] ||
      error?.response?.data?.details ||
      error?.message ||
      "Something went wrong!";

    console.error("API request failed:", error);
    toast.error(errorMsg);
  }
}
