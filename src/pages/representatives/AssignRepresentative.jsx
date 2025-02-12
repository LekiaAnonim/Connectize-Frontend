import React, { useState, useMemo, useEffect } from "react";
import HeadingText from "../../components/HeadingText";
import LightParagraph from "../../components/ParagraphText";
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../../api-services/users";
import { useAuth } from "../../context/userContext";
import { RepresentativesList } from "../../components/representatives/RepresentativesList";
import { UserSearchInput } from "../../components/representatives/UserSearchInput";
import { UserList } from "../../components/representatives/UserList";
import {
  getAllRepresentatives,
  getOrCreateRepresentativeCategory,
} from "../../api-services/representatives";
import { getCompanies } from "../../api-services/companies";
import { useCustomQuery } from "../../context/queryContext";
import { UserType } from "../../lib/helpers/types";
import Restricted from "../../components/Restricted";

export default function AssignRepresentative() {
  const [username, setUsername] = useState("");
  const { user: currentUser } = useAuth();
  const { refetchInterval } = useCustomQuery();

  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
    refetchInterval,
  });

  const { data: companies, isLoading: companyLoading } = useQuery({
    queryKey: ["companies"],
    queryFn: getCompanies,
  });

  const company_id = companies?.[0]?.id;

  const { data: representatives, isLoading: repsLoading } = useQuery({
    queryKey: ["representatives", company_id],
    queryFn: () => getAllRepresentatives({ company_id }),
    enabled: !!company_id,
    refetchInterval,
  });

  const { data: representativeCategories, isLoading: repsCatLoading } =
    useQuery({
      queryKey: ["representatives-categories"],
      queryFn: getOrCreateRepresentativeCategory,
    });

  const filteredUsers = useMemo(() => {
    return users?.filter((user) => {
      const thisUsername = (user?.first_name + user?.last_name)
        ?.toString()
        .toLowerCase();
      const currentUsername = (currentUser?.first_name + currentUser?.last_name)
        ?.toString()
        ?.toLowerCase();
      const isCurrentUser = currentUsername === thisUsername;
      const isUsernameValid =
        user?.first_name !== null && user?.first_name !== undefined;

      if (username?.trim()) {
        return (
          isUsernameValid &&
          thisUsername.includes(username.toLowerCase().trim()) &&
          !isCurrentUser
        );
      }

      return isUsernameValid && !isCurrentUser;
    });
  }, [users, username, currentUser]);

  const [cachedReps, setCachedReps] = useState([]);

  useEffect(() => {
    document.title = "Manage Representatives | Connectize";
    setCachedReps(representatives);
  }, [representatives]);

  const memoizedRepresentatives = cachedReps?.map((reps) => {
    const user = users?.find((user) => reps?.user === user?.id);
    const role = representativeCategories?.find(
      (category) => category?.id === reps?.category
    );

    const company = companies?.[0];
    return {
      id: reps?.id,
      user,
      company,
      status: reps?.status,
      role: role?.type,
      category: role?.id,
      invited: reps?.invited,
    };
  });

  return currentUser?.user_type === UserType ? (
    <Restricted fallback="assigning new representatives" />
  ) : (
    <section>
      <section className="space-y-6">
        <div className="">
          <HeadingText>Assign Representatives</HeadingText>
          <LightParagraph>
            Assign representatives to manage your company on connectize and
            specify the role of representation{" "}
            <strong className="text-black">
              (e.g human resources, technical, commercial)
            </strong>
          </LightParagraph>
        </div>
        <UserSearchInput username={username} setUsername={setUsername} />
        <UserList
          isLoading={isLoading}
          filteredUsers={filteredUsers}
          setCachedReps={setCachedReps}
        />
        <RepresentativesList
          isLoading={repsLoading || companyLoading || repsCatLoading}
          representatives={memoizedRepresentatives}
          setCachedReps={setCachedReps}
        />
      </section>
    </section>
  );
}
