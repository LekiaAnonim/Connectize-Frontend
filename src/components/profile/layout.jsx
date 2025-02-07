import React from "react";
import { getSession } from "../../lib/session";
import useRedirect from "../../hooks/useRedirect";
import { Outlet } from "react-router-dom";

function ProfileLayout() {
  const currentYear = new Date().getFullYear();

  const session = getSession();

  useRedirect(!session, "/login");

  return (
    <>
      <main className="container max-w-screen-lg mx-auto">
        <Outlet />
      </main>
      <footer className="text-center py-6 text-sm">
        <p>ALL RIGHT RESERVED &copy; {currentYear}</p>
      </footer>
    </>
  );
}

export default ProfileLayout;
