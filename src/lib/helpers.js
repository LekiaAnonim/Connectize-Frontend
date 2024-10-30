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
    const response = await axios({
      url: `${connectizeApiBaseUrl}${url}`,
      method,
      data,
      // headers:
      //   getSession() && type !== "refresh-token"
      //     ? {
      //         Authorization: `Bearer ${getSession()?.token}`,
      //       }
      //     : undefined,
    });

    if (data) {
      resetForm?.();
      console.log("Worked here for api request: ", response);

      return response.data;
    } else {
      const errorMessage = "Unknown error occurred";
      throw new Error(errorMessage);
    }
  } catch (error) {
    const errorMsg =
      error?.response?.data?.username?.[0] || "Something went wrong!";
    toast.error(errorMsg);
    console.error("API request failed:", error);
  }
}
