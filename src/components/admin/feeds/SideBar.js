import React from "react";
import { Link, useLocation } from "react-router-dom";
import { feedNavItems } from "../../../lib/data";
import Logo from "../../logo";
import clsx from "clsx";
import { useNav } from "../../../context/navContext";
import { useMediaQuery } from "react-responsive";
import FeedSearch from "./FeedSearch";
import { useQuery } from "@tanstack/react-query";
import { getSuggestedUsersForCurrentUser } from "../../../api-services/users";
import { companyArray } from "../../../lib/data/feed";

const Sidebar = () => {
  const { pathname } = useLocation();
  const { navOpen, toggleNav } = useNav();

  const isTablet = useMediaQuery({ minWidth: 768 });

  if (isTablet) toggleNav(false);

  return (
    <div
      className={clsx(
        "max-md:absolute max-md:top-0 max-md:left-0 max-md:h-screen bg-white rounded p-4 shrink-0 max-w-[350px] md:w-[240px] lg:w-[260px] 2xl:w-[280px] min-h-screen max-md:transition-all duration-500 ease-out",
        {
          "max-md:overflow-y-auto max-md:min-w-[300px] max-md:w-[60%] z-[20000]":
            navOpen,
          "max-md:overflow-hidden max-md:-left-full max-md:opacity-0 max-md:-z-[20000]":
            !navOpen,
        }
      )}
    >
      <Logo className="md:mx-auto mb-4" height="70px" width="70px" />

      <FeedSearch className="xs:hidden mb-4" />

      <NavigationSection pathname={pathname} />

      <Companies />
    </div>
  );
};

export default Sidebar;

function NavigationSection({ pathname }) {
  const { toggleNav } = useNav();
  return (
    <ul className="mb-6 space-y-1 xs:text-sm p-2 bg-[#eee] rounded">
      {feedNavItems.map((item, index) => (
        <li className="" key={index}>
          <Link
            to={item.to}
            onClick={() => toggleNav(false)}
            className={clsx(
              "flex gap-2 items-center transition-colors duration-300 p-2 rounded  hover:text-mid_grey text-gray-500",
              {
                "!text-gold bg-mid_grey pointer-events-none":
                  item.to === pathname,
              }
            )}
          >
            <>{item.icon}</>
            <span>{item.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Companies({ companyArray }) {
  const { data: companyArrayData } = useQuery({
    queryKey: ["suggestedUsers"],
    queryFn: getSuggestedUsersForCurrentUser,
    placeholderData: companyArray,
  });
  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-xl">Companies</h3>
      <ul className="space-y-2 divide-y divide-gray-100/80 xs:text-sm p-0">
        {companyArrayData.map(
          ({ company, avatar: src, bio: description }, index) => (
            <li key={index} className="flex items-center gap-2 pt-2">
              <img
                src={src || "/images/logo.png"}
                alt={company}
                className="size-10 rounded-full"
              />
              <div className="">
                <h1 className="text-base font-semibold leading-normal m-0 capitalize">
                  {company}
                </h1>
                <span className="text-gray-500 text-sm line-clamp-1">
                  {description}
                </span>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
