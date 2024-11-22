import clsx from "clsx";
import React from "react";
import { VerifiedIcon } from "../../../icon";

import { useQuery } from "@tanstack/react-query";
import { getSuggestedUsersForCurrentUser } from "../../../api-services/users";
import { notificationMessages, suggestions } from "../../../lib/data/feed";

const NotificationsSuggestions = () => {
  return (
    <div className="h-fit w-full flex items-start flex-col sm:flex-row md:flex-col lg:flex-row xl:flex-col gap-4">
      <Notifications notificationMessages={notificationMessages} />

      <Suggestions />
    </div>
  );
};

export default NotificationsSuggestions;

export function Notifications({ notificationMessages, className }) {
  return (
    <div className={clsx("bg-white rounded p-4 space-y-4 w-full", className)}>
      <header className="flex justify-between items-center gap-2">
        <h2 className="text-xl font-bold">Notifications</h2>
        <button className="text-gray-500 hover:text-black transition-colors duration-300 underline">
          Clear All
        </button>
      </header>
      <div className="space-y-4">
        {notificationMessages.map(
          ({ company, src, message, timeStamp }, index) => (
            <div key={index} className="flex items-center gap-2">
              <img
                src={src}
                alt={company}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="space-y-0">
                <h3 className="text-base leading-[1.125] font-bold m-0">
                  {company}
                </h3>
                <p className="text-sm text-gray-700 line-clamp-1">{message}</p>
                <small className="text-gray-400 text-xs m-0">{timeStamp}</small>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export function Suggestions() {
  const { data: suggestedUsers } = useQuery({
    queryKey: ["suggestedUsers"],
    queryFn: getSuggestedUsersForCurrentUser,
    placeholderData: suggestions,
  });
  return (
    <div className="bg-white rounded p-4 space-y-4 w-full">
      <h2 className="text-xl font-bold">Suggested</h2>
      <ul className="space-y-2 divide-y divide-gray-100 p-0">
        {suggestedUsers.map(
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
                alt={first_name + last_name}
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
        )}
      </ul>
    </div>
  );
}
