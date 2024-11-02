import React from "react";
import ResponsiveNav from "../../ResponsiveNav";
import CreatePost from "./CreatePost";
import DiscoverPost from "./DiscoverPost";

const DiscoverFeed = () => {
  return (
    <section className="rounded md:w-full">
      <ResponsiveNav />
      <h1 className="text-3xl font-light">Discover</h1>

      <CreatePost />

      <DiscoverPost />
    </section>
  );
};

export default DiscoverFeed;
