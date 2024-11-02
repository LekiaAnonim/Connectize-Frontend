import React from "react";
import ResponsiveNav from "../../ResponsiveNav";
import CreatePost from "./CreatePost";
import DiscoverPost from "./DiscoverPost";

const DiscoverFeed = () => {
  return (
    <section className="md:w-full shrink-0">
      <ResponsiveNav />
      <h1 className="text-3xl font-light">Discover</h1>

      <CreatePost />

      <DiscoverPost />
    </section>
  );
};

export default DiscoverFeed;
