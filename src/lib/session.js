import Cookies from "js-cookie";

const AUTH_SESSION_COOKIE = "connectize_spicy_auth_cookie";

// Get session cookie
export const setSession = (data = "") => {
  Cookies.set(AUTH_SESSION_COOKIE, JSON.stringify(data));
};

// Get session cookie
export const getSession = () => Cookies.get(AUTH_SESSION_COOKIE);

// Remove session cookie
export const removeSession = () => Cookies.remove(AUTH_SESSION_COOKIE);
