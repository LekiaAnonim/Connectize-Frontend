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
      <main className="container">
        <Outlet />
      </main>
      <footer className="text-center py-5">
        <p>ALL RIGHT RESERVED &copy; {currentYear}</p>
      </footer>
    </>
  );
}

export default ProfileLayout;
