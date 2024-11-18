import { makeApiRequest, REGISTER_EMAIL_KEY } from "../lib/helpers";
import { setSession } from "../lib/session";

export const authenticationService = async ({
  url,
  values,
  type,
  method = "POST",
  resetForm,
}) => {
  try {
    const { results } = await makeApiRequest({
      url: `api/auth/${url}/`,
      method,
      data: values,
      resetForm,
      type,
    });

    if (type === "login") {
      setSession(results);
    } else if (type === "register" && values?.email) {
      localStorage.setItem(REGISTER_EMAIL_KEY, values.email);
    } 
    return true;
  } catch (error) {
    console.error("Auth submission error:", error);
    return false;
  }
};
