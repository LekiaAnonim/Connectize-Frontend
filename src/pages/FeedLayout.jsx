import clsx from "clsx";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/admin/feeds/SideBar";
import TopServiceSuggestions from "../components/admin/feeds/TopServiceSuggestions";
import { useNav } from "../context/navContext";
import ResponsiveNav from "../components/ResponsiveNav";

function FeedLayout() {
  const { navOpen } = useNav();
  return (
    <section
      className={clsx(
        "flex flex-col items-start md:flex-row p-3 gap-3 bg-background",
        {
          "overflow-y-hidden h-screen": navOpen,
        }
      )}
    >
      <Sidebar />

      <section className="w-full grid grid-cols-1 xl:grid-cols-3 gap-3 py-2">
        <section className="md:w-full xl:col-span-2 space-y-6 xs:space-y-6">
          <ResponsiveNav />
          <Outlet />
        </section>
        <TopServiceSuggestions />
      </section>
    </section>
  );
}

export default FeedLayout;
