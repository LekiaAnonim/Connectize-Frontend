import React from "react";
import ResponsiveNav from "../../ResponsiveNav";
import CreatePost from "./CreatePost";
import DiscoverPostTabs from "./DiscoverPostTabs";
import Summary from "./summary";

const DiscoverFeed = ({ isUserProfile = false }) => {
  return (
    <section className="md:w-full xl:col-span-2 space-y-6 xs:space-y-4">
      {isUserProfile ? (
        <Summary />
      ) : (
        <>
          <ResponsiveNav />
          <h1 className="text-3xl font-semibold">Discover</h1>
          <CreatePost />
          <DiscoverPostTabs />
        </>
      )}
    </section>
  );
};

export default DiscoverFeed;
