import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/logo";
import useRedirect from "../../hooks/useRedirect";
import {
  CONFIRM_RESET_PASSWORD_KEY,
  RESET_PASSWORD_EMAIL_KEY,
  RESET_PASSWORD_KEY,
  SUCCESS_TYPE_KEY,
} from "../../lib/data/authentication";
import HeadingText from "../../components/HeadingText";

function SuccessPage() {
  const year = new Date().getFullYear();

  const hasSuccess = localStorage.getItem(SUCCESS_TYPE_KEY);
  const email = localStorage.getItem(RESET_PASSWORD_EMAIL_KEY);

  useRedirect(!hasSuccess, "/login");

  useEffect(() => {
    document.title = "Success Page | connectize";
    return () => localStorage.removeItem(SUCCESS_TYPE_KEY);
  });

  return (
    <div className="p-4 flex flex-col items-center  text-center min-h-screen">
      <div className="w-full self-start">
        <Logo />
      </div>
      <div className="p-4 flex flex-col items-center justify-center max-w-lg gap-4">
        <img
          src="/images/passportThree.png"
          alt="success tick"
          className="w-24"
        />
        <HeadingText>
          Congratulations{" "}
          {hasSuccess === RESET_PASSWORD_KEY
            ? "a mail has been sent to your email account"
            : hasSuccess === CONFIRM_RESET_PASSWORD_KEY
            ? "your password has been reset, kindly login with your new password"
            : " your registration was successful"}
        </HeadingText>

        <Link
          to={hasSuccess === RESET_PASSWORD_KEY ? `mailto:${email}` : "/login"}
          className="text-white no-underline btn-primary mt-2"
        >
          {hasSuccess === RESET_PASSWORD_KEY ? "Check email" : "Login"}
        </Link>
      </div>
      <footer className="text-center py-5">
        ALL RIGHT RESERVED &copy; {year}
      </footer>
    </div>
  );
}

export default SuccessPage;
