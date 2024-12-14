import Cookies from "js-cookie";
import CryptoJS from "crypto-js";

export const AUTH_SESSION_COOKIE = "connectize_spicy_auth_cookie";

const ENCRYPTION_KEY =
  "9803037e608561b4485fa127ed2c0788578605492c15942944bf34868adf2c4f";

// Encrypt the data using AES encryption
const encryptData = (data) =>
  CryptoJS.AES.encrypt(data, ENCRYPTION_KEY).toString();

// Decrypt the data using AES decryption
const decryptData = (encryptedData) => {
  const bytes = CryptoJS.AES.decrypt(encryptedData, ENCRYPTION_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
};

// Set session cookie with encryption
export const setSession = (value, expiresInDays = 7) => {
  const sessionString = JSON.stringify(value);
  const encryptedSession = encryptData(sessionString);

  Cookies.set(AUTH_SESSION_COOKIE, encryptedSession, {
    expires: expiresInDays,
  });
};

// Get session cookie with decryption
export const getSession = () => {
  try {
    const encryptedSession = Cookies.get(AUTH_SESSION_COOKIE);
    if (!encryptedSession) return null; // Return null if no session cookie exists

    const decryptedSession = decryptData(encryptedSession);
    const session = JSON.parse(decryptedSession);

    // Optionally refresh the session expiration by resetting the cookie
    setSession(session);

    return session;
  } catch (error) {
    console.error("Error reading or decrypting session cookie:", error);
    return null; // Return null on decryption or parsing error
  }
};

// Remove session cookie
export const removeSession = () => Cookies.remove(AUTH_SESSION_COOKIE);
