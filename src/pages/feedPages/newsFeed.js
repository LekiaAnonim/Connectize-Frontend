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
      className={clsx(
        "flex flex-col md:flex-row p-3 gap-2 xl:gap-0 bg-[#EEEEEE]",
        {
          "overflow-y-hidden h-screen": navOpen,
        }
      )}
    >
      <Sidebar />
      <div className="max-xl:flex-col flex gap-x-2 gap-y-6 md:py-2 max-md:container max-sm:!px-0">
        <DiscoverFeed />
        <NotificationsSuggestions />
      </div>
    </div>
  );
}
