import React from "react";
import Sidebar from "../../components/admin/feeds/SideBar";
import DiscoverFeed from "../../components/admin/feeds/DiscoverFeed";
import NotificationsSuggestions from "../../components/admin/feeds/NotificationsSuggestions";

export default function NewsFeed() {
  return (
    <div className="flex flex-col md:flex-row p-2 gap-2 bg-light_grey">
      <Sidebar />
      <DiscoverFeed />
      <NotificationsSuggestions />
    </div>
  );
}
