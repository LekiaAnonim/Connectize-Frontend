import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Logo from "../../components/logo";
import { getSession } from "../../lib/session";

function AuthLayout({ redirectUrl = "/" }) {
  const session = getSession();
  const { pathname } = useLocation();

  if (session) {
    return (
      <Navigate to={pathname === "/login" ? "/profile" : redirectUrl} replace />
    );
  }

  return (
    <main className="flex justify-center">
      <section className="w-full flex flex-col items-center justify-center py-8 px-4 lg:basis-1/2 shrink-0">
        <section className="w-full max-w-sm lg:max-w-md">
          <Logo />
          <section className="w-full mt-4">
            <Outlet />
          </section>
        </section>
      </section>

      <div className="hidden lg:block basis-1/2">
        <img
          src="/images/signup-image.png"
          alt="Oil dripping for connectize"
          className="w-full aspect-square "
        />
      </div>
    </main>
  );
}

export default AuthLayout;
