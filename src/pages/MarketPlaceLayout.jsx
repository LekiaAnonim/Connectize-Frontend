import React from "react";
import Navbar from "../components/userProfile/Navbar";
import Sidebar from "../components/admin/markets/sidebar";
import { Outlet, useLocation } from "react-router-dom";
import clsx from "clsx";

const MarketPlaceLayout = () => {
  const { pathname } = useLocation();
  const isChatRoom = pathname.startsWith("/messages/room_");
  return (
    <main
      className={clsx("bg-background min-h-screen", {
        "lg:h-screen overflow-hidden": isChatRoom,
      })}
    >
      <Navbar />
      <section className="max-md:container flex flex-col items-start md:flex-row p-3 gap-4 xl:!gap-5">
        <Sidebar />
        <section className="grid grid-cols-1 md:px-0 gap-2 w-full max-md:mb-16">
          <Outlet />
        </section>
      </section>
    </main>
  );
};

export default MarketPlaceLayout;
