import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import ProfileNavBar from "./ProfileNavBar";
import { getSession } from "../../lib/session";

function ProfileLayout() {
  const currentYear = new Date().getFullYear();

  const session = getSession();

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <ProfileNavBar />
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
