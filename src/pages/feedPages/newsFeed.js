import React from "react";
import Sidebar from "../../components/admin/feeds/SideBar";
import DiscoverFeed from "../../components/admin/feeds/DiscoverFeed";
import NotificationsSuggestions from "../../components/admin/feeds/NotificationsSuggestions";
import { useNav } from "../../context/navContext";
import clsx from "clsx";

export default function NewsFeed() {
  const { navOpen } = useNav();
  return (
    <section
      className={clsx(
        "flex flex-col items-start md:flex-row p-3 gap-3 bg-[#EEEEEE]",
        {
          "overflow-y-hidden h-screen": navOpen,
        }
      )}
    >
      <Sidebar />

      <section className="w-full grid grid-cols-1 xl:grid-cols-3 gap-3 py-2">
        <DiscoverFeed />
        <NotificationsSuggestions />
      </section>
    </section>
  );
}
