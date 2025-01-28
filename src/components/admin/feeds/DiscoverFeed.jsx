import React from "react";
import CreatePost from "./CreatePost";
import DiscoverPostTabs from "./DiscoverPostTabs";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/userContext";
import DiscoverPosts from "./DiscoverPosts";

const DiscoverFeed = () => {
  const { user: currentUser } = useAuth();
  return (
    <section className="space-y-4">
      <div className="flex items-baseline gap-2">
        <h1 className="text-3xl font-semibold">Discover</h1>
        {currentUser && currentUser?.is_first_time_user && (
          <Link
            to="/home"
            className="hover:!no-underline !underline !text-gray-400 hover:!text-black font-semibold text-sm"
          >
            Complete your profile
          </Link>
        )}
      </div>
      <CreatePost />
      <DiscoverPostTabs />
      <DiscoverPosts />
    </section>
  );
};

export default DiscoverFeed;
