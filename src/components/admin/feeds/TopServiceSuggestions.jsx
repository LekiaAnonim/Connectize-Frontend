import React from "react";
import { VerifiedIcon } from "../../../icon";

import { useQuery } from "@tanstack/react-query";
import { getSuggestedUsersForCurrentUser } from "../../../api-services/users";
import { PostCard } from "./DiscoverPostTabs";
import HeadingText from "../../HeadingText";
import LightParagraph from "../../ParagraphText";
import { Avatar } from "@chakra-ui/react";
import { avatarStyle } from "../../ResponsiveNav";
import { getServices } from "../../../api-services/services";

const TopServiceSuggestions = () => {
  return (
    <div className="h-fit w-full flex items-start flex-col sm:flex-row md:flex-col lg:flex-row xl:flex-col gap-4 lg:sticky lg:top-0 lg:right-4">
      <TopServices />

      <Suggestions />
    </div>
  );
};

export default TopServiceSuggestions;

export function TopServices() {
  const { data: services, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });

  const getRandomNumber = () => {
    const num = Math.floor(Math.random() * services?.length - 1);

    return num || 0;
  };

  const service = services?.[getRandomNumber()];

  return (
    <section className="">
      <div className="p-3 sm:p-4 lg:!px-2">
        <HeadingText>Top Services</HeadingText>
      </div>

      <PostCard
        whole={service}
        companyName={service?.company}
        logo={service?.avatar}
        summary={service?.description}
        url={"/services/" + service?.id}
        title={service?.title}
        verified={service?.featured}
      />
    </section>
  );
}

export function Suggestions() {
  const { data: suggestedUsers, isLoading } = useQuery({
    queryKey: ["suggestedUsers"],
    queryFn: getSuggestedUsersForCurrentUser,
  });

  return (
    <div className="bg-white rounded p-4 space-y-4 w-full h-fit">
      <h2 className="text-xl font-bold">Suggested</h2>
      <ul className="space-y-2 divide-y divide-gray-100 p-0">
        {isLoading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <CirceTitleSubtitleSkeleton key={index} />
          ))
        ) : suggestedUsers?.length === 0 ? (
          <LightParagraph>No suggested users...</LightParagraph>
        ) : (
          suggestedUsers?.map((user) => (
            <SuggestionListItem key={user.id} user={user} />
          ))
        )}
      </ul>
    </div>
  );
}

function SuggestionListItem({ user }) {
  const { first_name, last_name, avatar, email: hashtag, verified } = user;

  return (
    <li className="flex items-center gap-2.5 pt-2">
      <Avatar
        src={avatar}
        name={`${first_name} ${last_name}`}
        size="sm"
        className={avatarStyle}
      />
      <div>
        <div className="flex items-center gap-x-0.5">
          <span className="text-base xs:leading-tight text-gray-700 font-bold capitalize">
            {first_name} {last_name}
          </span>
          {verified && <VerifiedIcon color="black" height="18" width="18" />}
        </div>
        <p className="text-sm text-gray-400 m-0">{hashtag}</p>
      </div>
    </li>
  );
}

export const CirceTitleSubtitleSkeleton = () => (
  <li className="flex items-center gap-3 pt-3 animate-pulse mb-3">
    <div className="size-8 rounded-full bg-gray-200"></div>
    <div className="flex-1">
      <div className="flex items-center gap-x-0.5">
        <div className="h-2 w-24 bg-gray-200 rounded"></div>
        <div className="size-3 bg-gray-200 rounded-full"></div>
      </div>
      <div className="h-2 w-36 bg-gray-200 rounded mt-1"></div>
    </div>
  </li>
);
