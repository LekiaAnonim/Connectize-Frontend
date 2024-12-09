import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { feedNavItems } from "../../../lib/data";
import Logo from "../../logo";
import clsx from "clsx";
import { useNav } from "../../../context/navContext";
import { useMediaQuery } from "react-responsive";
import FeedSearch from "./FeedSearch";
import { useQuery } from "@tanstack/react-query";
import { getCompanies } from "../../../api-services/companies";
import LightParagraph from "../../ParagraphText";
import CloseOverlay from "../../CloseOverlay";
import { CirceTitleSubtitleSkeleton } from "../feeds/TopServiceSuggestions";
import { Avatar } from "@chakra-ui/react";
import { LogoutOutlined } from "@ant-design/icons";
import { useAuth } from "../../../context/userContext";
import { getSession } from "../../../lib/session";
import { logOutCurrentUser } from "../../../api-services/users";

const Sidebar = () => {
  const { pathname } = useLocation();
  const { navOpen, toggleNav } = useNav();

  const isTablet = useMediaQuery({ minWidth: 768 });

  if (isTablet) toggleNav(false);

  return (
    <>
      <CloseOverlay />
      <div
        className={clsx(
          "max-md:absolute max-md:top-0 max-md:left-0 max-md:h-screen bg-white rounded p-4 shrink-0 max-w-[350px] md:w-[240px] lg:w-[270px] 2xl:w-[280px] min-h-screen max-md:transition-all duration-500 ease-out md:sticky md:top-0 md:right-4 md:h-screen md:overflow-y-auto scrollbar-hidden",
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

        <Companies toggleNav={toggleNav} />
      </div>
    </>
  );
};

export default Sidebar;

function NavigationSection({ pathname }) {
  const { toggleNav } = useNav();
  const { user: currentUser } = useAuth();
  const session = getSession();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);

    logOutCurrentUser();
    setLoading(false);
  };

  return (
    <ul className="mb-6 space-y-1 xs:text-sm p-2 bg-background rounded">
      {feedNavItems.map((item, index) => (
        <li className="" key={index}>
          <Link
            to={item.to}
            onClick={() => toggleNav(false)}
            className={clsx(
              "flex gap-2 items-center transition-colors duration-300 p-2 rounded  hover:!text-mid_grey",
              {
                "!text-gold bg-mid_grey pointer-events-none":
                  item.to === pathname,
                "!text-gray-500": item.to !== pathname,
              }
            )}
          >
            <>{item.icon}</>
            <span>{item.name}</span>
          </Link>
        </li>
      ))}
      {currentUser && session && (
        <li>
          <button
            className={clsx(
              "flex gap-2 items-center transition-colors duration-300 p-2 rounded  hover:text-red-600 text-gray-500 disabled:cursor-not-allowed disabled:text-red-600"
            )}
            onClick={handleLogout}
            disabled={loading}
          >
            <LogoutOutlined />
            <span>{loading ? "Logging out..." : "Logout"}</span>
          </button>
        </li>
      )}
    </ul>
  );
}

function Companies({ toggleNav }) {
  const { data: companies, isLoading } = useQuery({
    queryKey: ["companies"],
    queryFn: getCompanies,
  });

  return (
    <div className="space-y-3 mb-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-xl">Companies</h3>
        {companies?.length <= 4 && (
          <Link
            to="/create-company"
            className="!text-gray-400 hover:!text-custom_blue text-sm xl:text-xs"
            onClick={() => toggleNav(false)}
          >
            Create company
          </Link>
        )}
      </div>
      <ul className="space-y-2 divide-y divide-gray-100/80 xs:text-sm p-0">
        {isLoading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <CirceTitleSubtitleSkeleton key={index} />
          ))
        ) : companies?.length === 0 ? (
          <LightParagraph>No company yet...</LightParagraph>
        ) : (
          companies?.map((company) => (
            <CompanyListItem key={company.id} company={company} />
          ))
        )}
      </ul>
    </div>
  );
}

function CompanyListItem({ company }) {
  const { company_name, logo, tag_line } = company;

  return (
    <li>
      <Link
        to={`/${company_name.toLowerCase().replaceAll(" ", "_")}`}
        className="flex items-center gap-2 pt-2"
      >
        <Avatar src={logo} name={company_name} size="sm" />
        <div>
          <h1 className="text-base font-semibold leading-normal m-0 capitalize line-clamp-2">
            {company_name}
          </h1>
          <span className="text-gray-400 text-xs line-clamp-1">
            {tag_line || "Tag line goes here"}
          </span>
        </div>
      </Link>
    </li>
  );
}
