import React, { useEffect } from "react";
import CreatePost from "./CreatePost";
import DiscoverPostTabs from "./DiscoverPostTabs";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/userContext";
import DiscoverPosts from "./DiscoverPosts";
import { CompanyUserType } from "../../../lib/helpers/types";
import { getCompanies } from "../../../api-services/companies";
import { useQuery } from "@tanstack/react-query";

const DiscoverFeed = () => {
  const { user: currentUser, setUser } = useAuth();

  const { data: companies = [] } = useQuery({
    queryKey: ["companies"],
    queryFn: () => getCompanies(),
    enabled: !!currentUser,
  });

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser, setUser]);
  return (
    <section className="space-y-4">
      <div className="flex items-baseline gap-2">
        <h1 className="text-3xl font-semibold">Discover</h1>
        {currentUser &&
          (currentUser?.is_first_time_user || companies.length <= 1) && (
            <Link
              to="/update-profile"
              className="hover:!no-underline !underline !text-gray-400 hover:!text-black font-semibold text-sm"
            >
              {currentUser?.is_first_time_user
                ? "Complete your profile"
                : "Create Company"}
            </Link>
          )}
      </div>
      {currentUser?.user_type !== CompanyUserType && <CreatePost />}
      <DiscoverPostTabs />
      <DiscoverPosts />
    </section>
  );
};

export default DiscoverFeed;
