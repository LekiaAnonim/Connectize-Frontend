import React from "react";
import { Outlet } from "react-router-dom";
import TopServiceSuggestions from "../components/admin/feeds/TopServiceSuggestions";

function FeedLayout() {
  return (
    <section className="w-full grid grid-cols-1 xl:grid-cols-3 gap-3">
      <section className="md:w-full xl:col-span-2 space-y-6 xs:space-y-6">
        <Outlet />
      </section>
      <TopServiceSuggestions />
    </section>
  );
}

export default FeedLayout;
