import React from "react";
import { VerifiedIcon } from "../../../icon";

import { useQuery } from "@tanstack/react-query";
import { getSuggestedUsersForCurrentUser } from "../../../api-services/users";
import { PostCard } from "./DiscoverPostTabs";
import HeadingText from "../../HeadingText";
import LightParagraph from "../../ParagraphText";

const TopServiceSuggestions = () => {
  return (
    <div className="h-fit w-full flex items-start flex-col sm:flex-row md:flex-col lg:flex-row xl:flex-col gap-4">
      <TopServices />

      <Suggestions />
    </div>
  );
};

export default TopServiceSuggestions;

export function TopServices() {
  return (
    <div className="p-3 sm:p-4 rounded-md bg-white">
      <div className="mb-2">
        <HeadingText>Top Services</HeadingText>
      </div>

      <PostCard />
    </div>
  );
}

export function Suggestions() {
  const { data: suggestedUsers } = useQuery({
    queryKey: ["suggestedUsers"],
    queryFn: getSuggestedUsersForCurrentUser,
    placeholderData: [],
  });

  return (
    <div className="bg-white rounded p-4 space-y-4 w-full h-fit">
      <h2 className="text-xl font-bold">Suggested</h2>
      <ul className="space-y-2 divide-y divide-gray-100 p-0">
        {suggestedUsers?.length < 1 ? (
          <LightParagraph>No suggested users...</LightParagraph>
        ) : (
          suggestedUsers?.map(
            ({
              id,
              first_name,
              last_name,
              avatar: src,
              email: hashtag,
              verified,
            }) => (
              <li key={id} className="flex items-center gap-2.5 pt-2">
                <img
                  src={src || "/images/logo.png"}
                  alt={`${first_name} ${last_name}`}
                  className="size-10 rounded-full"
                />
                <div className="">
                  <div className="flex items-center gap-x-0.5">
                    <span className="text-base xs:leading-tight text-gray-700 font-bold capitalize">
                      {first_name} {last_name}
                    </span>
                    {verified && (
                      <VerifiedIcon color="black" height="18" width="18" />
                    )}
                  </div>
                  <p className="text-sm text-gray-400 m-0">{hashtag}</p>
                </div>
              </li>
            )
          )
        )}
      </ul>
    </div>
  );
}
