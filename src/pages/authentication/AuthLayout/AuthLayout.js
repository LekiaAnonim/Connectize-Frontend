import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../../components/logo";
// import { getSession } from "../lib/session";

function AuthLayout({ redirectUrl = "/" }) {
  // const session = getSession();

  // if (session) {
  //   return <Navigate to={redirectUrl} replace />;
  // }

  return (
    <main className="md:flex gap-6">
      <section className="flex flex-col items-center md:items-start justify-center py-8 px-4">
        <Logo />
        <section className="w-full flex items-center justify-center shrink-0">
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
