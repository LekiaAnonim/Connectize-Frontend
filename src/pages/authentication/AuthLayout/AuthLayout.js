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
    <main className="flex justify-center  bg-red-500">
      <section className="flex flex-col items-start justify-center py-8 px-4 md:basis-1/2 shrink-0">
        <section className="w-full max-w-md">
          <Logo />
          <section className="w-full flex items-center justify-center">
            <Outlet />
          </section>
        </section>
      </section>

      <img
        src="/images/signup-image.png"
        alt="Oil dripping for connectize"
        className="w-full hidden md:block"
      />
    </main>
  );
}

export default AuthLayout;
