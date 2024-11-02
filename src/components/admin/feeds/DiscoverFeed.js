import React from "react";
import ResponsiveNav from "../../ResponsiveNav";
import CreatePost from "./CreatePost";
import DiscoverPostTabs from "./DiscoverPostTabs";
import DiscoverPosts from "./DiscoverPosts";

const DiscoverFeed = () => {
  return (
    <section className="md:w-full shrink-0 space-y-6">
      <ResponsiveNav />
      <h1 className="text-3xl font-light">Discover</h1>

      <CreatePost />

      <DiscoverPostTabs />

      <DiscoverPosts />
    </section>
  );
};

export default DiscoverFeed;
