import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Logo from "../../../components/logo";
import { getSession } from "../../../lib/session";

function AuthLayout({ redirectUrl = "/" }) {
  const session = getSession();

  if (session) {
    return <Navigate to={redirectUrl} replace />;
  }

  return (
    <main className="md:flex">
      <section className="flex flex-col items-start justify-center  shrink-0 py-8 px-4">
        <Logo />
        <section className="w-full flex items-center justify-center">
          <Outlet />
        </section>
      </section>

      <img
        src="/images/signup-image.png"
        alt="Oil dripping for connectize"
        className="size-full hidden md:block"
      />
    </main>
  );
}

export default AuthLayout;
