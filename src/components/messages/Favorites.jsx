import React from "react";
import { useAuth } from "../../context/userContext";
import { useQuery } from "@tanstack/react-query";
import { getAllCompanies } from "../../api-services/companies";
import { getAllUsers } from "../../api-services/users";
import HeadingText from "../HeadingText";
import { Avatar } from "@chakra-ui/react";
import { avatarStyle } from "../ResponsiveNav";
import { Link } from "react-router-dom";
import RoomName from "./RoomName";
import LightParagraph from "../ParagraphText";
import { motion } from "framer-motion";

export default function Favorites() {
  const { user: currentUser } = useAuth();

  const { data: companies, isLoading: companiesLoading } = useQuery({
    queryKey: ["allConnectizeCompanies"],
    queryFn: getAllCompanies,
    enabled: !!currentUser,
  });

  const { data: users, isLoading: usersLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
    enabled: !!currentUser,
  });

  const filteredUsers = users
    ?.filter((user) => user.first_name && user?.id !== currentUser?.id)
    ?.slice(0, 10);

  return (
    <section className="space-y-2">
      <HeadingText heading="sub-heading" weight="semibold">
        Favorites
      </HeadingText>

      <section className="flex overflow-x-auto gap-2 scrollbar-hidden scroll-smooth">
        {companiesLoading || usersLoading ? (
          <CardSkeletonList />
        ) : filteredUsers?.length <= 0 ? (
          <LightParagraph>No favorites yet</LightParagraph>
        ) : (
          filteredUsers?.map((user) => {
            const company = companies?.results?.find(
              (company) => company?.profile === user?.email
            );
            return (
              <motion.div
                key={user?.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-2 py-4 bg-white rounded-md text-center space-y-3 !w-[150px] flex flex-col shrink-0"
              >
                <Link to={`/${company?.company_name || ""}`}>
                  <Avatar
                    className={avatarStyle}
                    src={company?.logo || "/images/default-company-logo.png"}
                    size="lg"
                  />
                </Link>

                <RoomName user={user} />
              </motion.div>
            );
          })
        )}
      </section>
    </section>
  );
}

const CardSkeletonList = () => {
  return Array.from({ length: 5 }, (_, index) => (
    <div
      key={index}
      className="p-2 py-4 bg-white rounded-md text-center space-y-3 w-[100px] flex flex-col shrink-0"
    >
      {/* Avatar Skeleton */}
      <div className="size-14 mx-auto rounded-full skeleton" />

      {/* Company Name Skeleton */}
      <div className="h-3.5 w-3/4 mx-auto skeleton rounded" />
    </div>
  ));
};
