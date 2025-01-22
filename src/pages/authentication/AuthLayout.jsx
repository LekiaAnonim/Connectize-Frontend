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
    <main className="flex justify-center h-screen p-4">
      <section className="size-full max-h-screen overflow-y-auto flex flex-col items-center justify-center py-4 lg:!w-1/2 shrink-0 scrollbar-hidden">
        <section className="w-full max-w-sm lg:max-w-md">
          <Logo />
          <section className="size-full mt-4">
            <Outlet />
          </section>
        </section>
      </section>

      <picture className="max-lg:hidden !w-[48%] shrink-0">
        <img
          src={`/images/${
            pathname === "/login" ? "signin-image" : "signup-image"
          }.png`}
          alt="connectize"
          className="size-full aspect-square "
        />
      </picture>
    </main>
  );
}

export default AuthLayout;
