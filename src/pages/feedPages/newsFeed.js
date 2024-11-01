import React from "react";
import Sidebar from "../../components/admin/feeds/SideBar";
import DiscoverFeed from "../../components/admin/feeds/DiscoverFeed";
import NotificationsSuggestions from "../../components/admin/feeds/NotificationsSuggestions";
import { useNav } from "../../context/navContext";
import clsx from "clsx";

export default function NewsFeed() {
  const { navOpen } = useNav();
  return (
    <div
      className={clsx("flex flex-col md:flex-row p-2 gap-2 bg-[#EEEEEE]", {
        "overflow-y-hidden h-screen": navOpen,
      })}
    >
      <Sidebar />
      <DiscoverFeed />
      <NotificationsSuggestions />
    </div>
  );
}
