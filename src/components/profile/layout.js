import React from "react";
import { Outlet } from "react-router-dom";
import ProfileNavBar from "./ProfileNavBar";

function ProfileLayout() {
  const currentYear = new Date().getFullYear();
  return (
    <main>
      <ProfileNavBar />
      <Outlet />
      <footer className="text-center py-5">
        <p>ALL RIGHT RESERVED &copy; {currentYear}</p>
      </footer>
    </main>
  );
}

export default ProfileLayout;
