import React from "react";
import Navbar from "../components/userProfile/Navbar";
import Sidebar from "../components/admin/markets/sidebar";
import { Outlet } from "react-router-dom";
import { useNav } from "../context/navContext";
import clsx from "clsx";

const MarketPlaceLayout = () => {
  const { navOpen } = useNav();
  return (
    <main
      className={clsx("bg-background", {
        "overflow-y-hidden h-screen": navOpen,
      })}
    >
      <Navbar />
      <section className="max-md:container flex flex-col items-start md:flex-row p-3 gap-4 xl:!gap-5">
        <Sidebar />
        <div className="grid grid-cols-1 md:px-0 gap-2 w-full">
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default MarketPlaceLayout;
