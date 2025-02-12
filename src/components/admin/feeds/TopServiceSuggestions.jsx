import React from "react";
import { VerifiedIcon } from "../../../icon";

import { useQuery } from "@tanstack/react-query";
import { getSuggestedUsersForCurrentUser } from "../../../api-services/users";
import { PostCard, PostCardSkeleton } from "./DiscoverPostTabs";
import HeadingText from "../../HeadingText";
import LightParagraph from "../../ParagraphText";
import { Avatar } from "@chakra-ui/react";
import { avatarStyle } from "../../ResponsiveNav";
import { getServices } from "../../../api-services/services";
import { motion } from "framer-motion";
import clsx from "clsx";
import Username from "../../Username";
import SeeMoreLink from "../../SeeMoreLink";

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

  // const getRandomNumber = () => {
  //   const num = Math.floor(Math.random() * services?.length);

  //   return num || 0;
  // };

  const service = services?.[0];

  return isLoading ? (
    <section className="w-full">
      <div className="p-3 sm:p-4 lg:!px-2">
        <div className="w-1/3 h-7 rounded-md skeleton" />
      </div>
      <PostCardSkeleton />
    </section>
  ) : service ? (
    <section className="">
      <div className="p-3 sm:p-4 lg:!px-2">
        <HeadingText>Recent Service</HeadingText>
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
  ) : (
    <></>
  );
}

export function Suggestions({
  heading = "Suggested",
  hasSeeMore = false,
  className,
}) {
  return (
    <div
      className={clsx("bg-white rounded p-4 space-y-4 w-full h-fit", className)}
    >
      <h2 className="text-xl font-bold">{heading}</h2>
      <SuggestionList hasSeeMore={hasSeeMore} />
    </div>
  );
}

export function SuggestionList({ hasSeeMore }) {
  const { data: suggestedUsers, isLoading } = useQuery({
    queryKey: ["suggestedUsers"],
    queryFn: getSuggestedUsersForCurrentUser,
  });

  return (
    <div className="">
      <ul className="space-y-2 divide-y divide-gray-100 p-0">
        {isLoading ? (
          Array.from({ length: 8 }, (_, index) => (
            <motion.div
              // initial={{ y: 10 }}
              // animate={{ y: 0 }}
              // transition={{ repeat: Infinity, delay: index * 0.2, duration: 2 }}
              key={index}
            >
              <CircleTitleSubtitleSkeleton />
            </motion.div>
          ))
        ) : suggestedUsers?.length === 0 ? (
          <LightParagraph>No suggested users...</LightParagraph>
        ) : (
          suggestedUsers?.map((user) => {
            const { first_name, last_name, avatar, email: hashtag, id } = user;
            return (
              <li className="flex items-center gap-2.5 pt-2" key={id}>
                <Avatar
                  src={avatar}
                  name={`${first_name} ${last_name}`}
                  size="sm"
                  className={avatarStyle}
                />
                <div>
                  <Username user={user} />
                  <p className="text-sm text-gray-400 m-0">{hashtag}</p>
                </div>
              </li>
            );
          })
        )}
      </ul>
      {hasSeeMore && suggestedUsers?.length > 10 && (
        <SeeMoreLink url="/representatives" />
      )}
    </div>
  );
}

export const CircleTitleSubtitleSkeleton = () => (
  <li className="flex items-center gap-3 pt-3 mb-3">
    <div className="size-8 rounded-full skeleton" />
    <div className="flex-1">
      <div className="flex items-center gap-x-0.5">
        <div className="h-2 w-24 skeleton rounded" />
        <div className="size-3 skeleton rounded-full" />
      </div>
      <div className="h-2 w-36 skeleton rounded mt-1" />
    </div>
  </li>
);
