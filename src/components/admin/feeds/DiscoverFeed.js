import React from "react";
import ResponsiveNav from "../../ResponsiveNav";
import CreatePost from "./CreatePost";
// import DiscoverPostTabs from "./DiscoverPostTabs";
import DiscoverPosts from "./DiscoverPosts";
import RecommendedProducts from "../products/recommendedProducts";

const DiscoverFeed = () => {
  return (
    <section className="md:w-full xl:col-span-2 space-y-6 xs:space-y-4">
      <ResponsiveNav />
      <h1 className="text-3xl font-light">Discover</h1>

      <CreatePost />

      {/* <DiscoverPostTabs /> */}
      <RecommendedProducts />

      <DiscoverPosts />
    </section>
  );
};

export default DiscoverFeed;
