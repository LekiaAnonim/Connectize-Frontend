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

  return (
    <section className="space-y-2">
      <HeadingText weight="semibold">Favorites</HeadingText>

      <section className="flex overflow-x-auto gap-2 scrollbar-hidden scroll-smooth">
        {users
          ?.filter((user) => user.first_name && user?.id !== currentUser?.id)
          ?.slice(0, 10)
          ?.map((user) => {
            const company = companies?.results?.find(
              (company) => company?.profile === user?.email
            );
            return (
              <div
                key={user?.id}
                className="p-2 bg-white rounded-md text-center space-y-3 !w-[200px] flex flex-col"
              >
                <Link to={`/${company?.company_name || ""}`}>
                  <Avatar
                    className={avatarStyle}
                    src={company?.logo || "/images/default-company-logo.png"}
                    size="lg"
                  />
                </Link>

                <RoomName user={user} />
              </div>
            );
          })}
      </section>
    </section>
  );
}
