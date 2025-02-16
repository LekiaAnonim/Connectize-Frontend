import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Logo from "../../components/logo";
import { getSession } from "../../lib/session";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";

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
      <section className="size-full max-h-screen overflow-y-auto flex flex-col items-center lg:!w-1/2 shrink-0 scrollbar-hidden">
        <section className="w-full max-xs:h-full py-4 max-w-sm lg:max-w-md">
          <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex gap-2"
          >
            <Logo />

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="max-w-screen-md text-2xl font-semibold"
            >
              {pathname === "/login" ? (
                <>
                  Connect, Collaborate and transact{" "}
                  <span className="text-gold font-bold">with connectize</span>
                </>
              ) : pathname === "/signup" ? (
                <>
                  <span className="text-gold font-bold">Connectize</span>{" "}
                  bridges the gap between interactions and transactions within
                  the oil and gas industry.
                </>
              ) : (
                ""
              )}
            </motion.h1>
          </motion.section>
          <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="size-full mt-4"
          >
            <Outlet />
          </motion.section>
        </section>
      </section>

      <section className="max-lg:hidden !w-[48%] shrink-0 pointer-events-none">
        <DotLottieReact
          src="/lottie/authentication.lottie"
          loop
          autoplay
          className="size-full aspect-square"
        />
      </section>
    </main>
  );
}

export default AuthLayout;
