import React from "react";
import { Suggestions } from "../admin/feeds/TopServiceSuggestions";
import { CompaniesList } from "../admin/feeds/SideBar";

export default function MessagesAside() {
  return (
    <section className="h-fit w-full flex items-start flex-col sm:flex-row md:flex-col lg:flex-row xl:flex-col gap-4 lg:sticky lg:top-0 lg:right-4">
      <Suggestions hasSeeMore />
      <CompaniesList />
    </section>
  );
}
