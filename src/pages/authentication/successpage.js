import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/logo";
import { REGISTER_EMAIL_KEY } from "../../lib/helpers";
import useRedirect from "../../hooks/useRedirect";

function SuccessPage() {
  const year = new Date().getFullYear();

  const hasEmail = localStorage.getItem(REGISTER_EMAIL_KEY);

  useRedirect(!hasEmail, "/login");

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
        <h1 className="text-2xl lg:text-3xl">
          Congratulations your registration was successful
        </h1>

        <Link
          to="/login"
          className="text-white no-underline btn-primary mt-2"
          onClick={() => localStorage.removeItem(REGISTER_EMAIL_KEY)}
        >
          Login
        </Link>
      </div>
      <footer className="text-center py-5">
        ALL RIGHT RESERVED &copy; {year}
      </footer>
    </div>
  );
}

export default SuccessPage;
