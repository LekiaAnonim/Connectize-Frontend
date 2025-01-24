import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/logo";
import useRedirect from "../../hooks/useRedirect";
import {
  CONFIRM_RESET_PASSWORD_KEY,
  RESET_PASSWORD_EMAIL_KEY,
  RESET_PASSWORD_KEY,
  SUCCESS_TYPE_KEY,
  VERIFY_ACCOUNT_KEY,
} from "../../lib/data/authentication";
import HeadingText from "../../components/HeadingText";
import { REGISTER_EMAIL_KEY } from "../../lib/helpers";
import LightParagraph from "../../components/ParagraphText";

const SuccessPage = () => {
  const year = new Date().getFullYear();
  const hasSuccess = localStorage.getItem(SUCCESS_TYPE_KEY);
  const email =
    localStorage.getItem(RESET_PASSWORD_EMAIL_KEY) ||
    localStorage.getItem(REGISTER_EMAIL_KEY);

  useRedirect(!hasSuccess, "/login");

  useEffect(() => {
    document.title = "Success Page | connectize";
    return () => localStorage.removeItem(SUCCESS_TYPE_KEY);
  }, []);

  const getMessage = () => {
    switch (hasSuccess) {
      case RESET_PASSWORD_KEY:
        return "A mail on how to reset your password has been sent to your email address";
      case CONFIRM_RESET_PASSWORD_KEY:
        return "Your password has been reset, kindly login with your new password";
      case VERIFY_ACCOUNT_KEY:
        return "Your account has been verified successfully. You can now proceed to login";
      default:
        return "Your registration was successful. Proceed to your mail service to activate your account";
    }
  };
  const getHeader = () => {
    switch (hasSuccess) {
      case RESET_PASSWORD_KEY:
        return "Reset Instruction Sent";
      case CONFIRM_RESET_PASSWORD_KEY:
        return "Password Reset Successfully";
      case VERIFY_ACCOUNT_KEY:
        return "Account Verification Successful";
      default:
        return "Congratulations";
    }
  };

  const getLink = () => {
    return hasSuccess === RESET_PASSWORD_KEY ||
      hasSuccess === REGISTER_EMAIL_KEY
      ? `mailto:${email}`
      : "/login";
  };

  const getLinkText = () => {
    return hasSuccess === RESET_PASSWORD_KEY ||
      hasSuccess === REGISTER_EMAIL_KEY
      ? "Check email"
      : "Login";
  };

  return (
    <main className="p-4 flex flex-col items-center text-center min-h-screen">
      <header className="w-full self-start">
        <Logo />
      </header>
      <section className="p-4 flex flex-col items-center justify-center max-w-lg gap-4">
        <img
          src="/images/passportThree.png"
          alt="success tick"
          className="w-24"
        />
        <HeadingText>{getHeader()}</HeadingText>
        <LightParagraph center >{getMessage()}</LightParagraph>
        <Link
          to={getLink()}
          className="text-white no-underline btn-primary mt-2"
        >
          {getLinkText()}
        </Link>
      </section>
      <footer className="text-center py-5">
        ALL RIGHT RESERVED &copy; {year}
      </footer>
    </main>
  );
};

export default SuccessPage;
