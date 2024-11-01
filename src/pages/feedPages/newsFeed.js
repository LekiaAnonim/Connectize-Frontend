import React from "react";
// import Logo from "../../components/logo";
import Sidebar from "../../components/admin/feeds/SideBar";
import DiscoverFeed from "../../components/admin/feeds/DiscoverFeed";
import NotificationsSuggestions from "../../components/admin/feeds/NotificationsSuggestions";

export default function NewsFeed() {
  return (
    <div style={{ background: "#faf9f7" }} className="">
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <DiscoverFeed />
        <NotificationsSuggestions />
      </div>
    </div>
  );
}
