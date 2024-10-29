import Cookies from "js-cookie";

const AUTH_SESSION_COOKIE = "connectize_spicy_auth_cookie";
const AUTH_SESSION_ID = "connectize_spicy_auth_cookie";

// Get session cookie
export const setSession = () => {
  const sessionIdFromBackend = Cookies.get(AUTH_SESSION_ID);
  Cookies.set(AUTH_SESSION_COOKIE, sessionIdFromBackend);
};

// Get session cookie
export const getSession = () => Cookies.get(AUTH_SESSION_COOKIE);

// Remove session cookie
export const removeSession = () => Cookies.remove(AUTH_SESSION_COOKIE);
