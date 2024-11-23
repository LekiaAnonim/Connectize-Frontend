import React from "react";
import Navbar from "../components/userProfile/Navbar";
import SidebarMenu from "../components/admin/markets/sidebar";
import { Outlet } from "react-router-dom";

const MarketPlaceLayout = () => {
  return (
    <main className="bg-background">
      <Navbar />
      <section className="max-md:container flex flex-col items-start md:flex-row p-3 gap-4 xl:!gap-5">
        <SidebarMenu />
        <div className="grid grid-cols-1 md:px-0 gap-2 w-full">
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default MarketPlaceLayout;
