import { toast } from "sonner";
import { makeApiRequest, REGISTER_EMAIL_KEY } from "../lib/helpers";
import { getSession, setSession } from "../lib/session";

export const authenticationService = async ({
  url,
  values,
  type,
  method = "POST",
  resetForm,
}) => {
  try {
    const result = await makeApiRequest({
      url: `auth/${url}`,
      method,
      data: values,
      resetForm,
      type,
    });

    if (type === "login" && result) {
      setSession(result);
    } else if (type === "register" && values?.email && result) {
      localStorage.setItem(REGISTER_EMAIL_KEY, values.email);
    } else if (type === "refresh-token" && result) {
      const session = getSession();

      if (session !== null)
        setSession({
          ...session,
          refreshToken: result.refreshToken,
          token: result.token,
        });
    }
    return true;
  } catch (error) {
    console.error("Auth submission error:", error);
    toast.error("Failed to submit form");
    return false;
  }
};
