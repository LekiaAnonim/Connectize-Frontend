import clsx from "clsx";
import React from "react";
import { VerifiedIcon } from "../../../icon";

const NotificationsSuggestions = () => {
  const notificationMessages = [
    {
      company: "The Walt Disney Company",
      src: "/images/passport7.PNG",
      message: "Tagged you in post",
      timeStamp: "12mins ago",
    },
    {
      company: "MasterCard",
      src: "/images/passport7.PNG",
      message: "Added you to  a community",
      timeStamp: "12mins ago",
    },
    {
      company: "IBM",
      src: "/images/passport7.PNG",
      message: "commented on a post you’re featured in",
      timeStamp: "12mins ago",
    },
  ];

  const suggestions = [
    {
      user: "McFly",
      src: "/images/passport13.PNG",
      hashtag: "@levraimcfly",
      isVerified: true,
    },
    {
      user: "JohnDoe",
      src: "/images/passport14.PNG",
      hashtag: "@johndoe",
      isVerified: true,
    },
    {
      user: "Janis Joplin",
      src: "/images/passport15.PNG",
      hashtag: "@realjanice",
      isVerified: true,
    },
    {
      user: "McFly",
      src: "/images/passport13.PNG",
      hashtag: "@levraimcfly",
      isVerified: true,
    },
    {
      user: "JohnDoe",
      src: "/images/passport14.PNG",
      hashtag: "@johndoe",
      isVerified: true,
    },
    {
      user: "Janis Joplin",
      src: "/images/passport15.PNG",
      hashtag: "@realjanice",
      isVerified: true,
    },
    {
      user: "McFly",
      src: "/images/passport13.PNG",
      hashtag: "@levraimcfly",
      isVerified: true,
    },
    {
      user: "JohnDoe",
      src: "/images/passport14.PNG",
      hashtag: "@johndoe",
      isVerified: true,
    },
    {
      user: "Janis Joplin",
      src: "/images/passport15.PNG",
      hashtag: "@realjanice",
      isVerified: true,
    },
  ];

  return (
    <div className="h-fit w-full flex items-start flex-col sm:flex-row md:flex-col lg:flex-row xl:flex-col gap-4">
      <Notifications notificationMessages={notificationMessages} />

      <Suggestions suggestions={suggestions} />
    </div>
  );
};

export default NotificationsSuggestions;

export function Notifications({ notificationMessages, className }) {
  return (
    <div className={clsx("bg-white rounded p-4 space-y-4 w-full", className)}>
      <div className="flex justify-between items-center gap-2">
        <h2 className="text-xl font-bold">Notifications</h2>
        <button className="text-gray-500 hover:text-black transition-colors duration-300 underline">
          Clear All
        </button>
      </div>
      <div className="space-y-4">
        {notificationMessages.map(
          ({ company, src, message, timeStamp }, index) => (
            <div key={index} className="flex items-center gap-3">
              <img
                src={src}
                alt={company}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="space-y-0">
                <h3 className="text-lg leading-tight m-0">{company}</h3>
                <p className="text-sm text-gray-700 line-clamp-1">{message}</p>
                <small className="text-gray-400 text-xs">{timeStamp}</small>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export function Suggestions({
  suggestions = [
    {
      user: "Janis Joplin",
      src: "/images/passport15.PNG",
      hashtag: "@realjanice",
      isVerified: true,
    },
  ],
}) {
  return (
    <div className="bg-white rounded p-4 space-y-4 w-full">
      <h2 className="text-xl font-bold">Suggested</h2>
      <ul className="space-y-2 divide-y divide-gray-100 p-0">
        {suggestions.map(({ user, src, hashtag, isVerified }) => (
          <li key={user} className="flex items-center gap-2.5 pt-2">
            <img src={src} alt={user} className="size-10 rounded-full" />
            <div className="">
              <div className="flex items-center gap-x-0.5">
                <span className="text-base xs:leading-tight text-gray-700">
                  {user}
                </span>
                {isVerified && (
                  <VerifiedIcon color="black" height="18" width="18" />
                )}
              </div>
              <p className="text-sm text-gray-400 m-0">{hashtag}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
