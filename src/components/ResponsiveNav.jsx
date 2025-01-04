import React from "react";
import { useNav } from "../context/navContext";
import { Menu } from "@mui/icons-material";
import clsx from "clsx";
import { ChartBar, Setting } from "../icon";
import FeedSearch from "./admin/feeds/FeedSearch";
import { NotificationPopOver } from "./notifications";
import { LinkWithTooltipIcon } from "./userProfile/Navbar";
import { Avatar, SkeletonCircle } from "@chakra-ui/react";
import { useAuth } from "../context/userContext";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCompanies } from "../api-services/companies";

function ResponsiveNav() {
  const { toggleNav } = useNav();
  const { user } = useAuth();

  const { data: companies, isLoading } = useQuery({
    queryKey: ["companies"],
    queryFn: getCompanies,
  });

  return (
    <div className="flex justify-between items-center gap-2 sm:gap-4 w-full mb-4 max-md:mt-2">
      {isLoading ? (
        <div className="flex">
          <SkeletonCircle />
          <SkeletonCircle className="-ml-1" />
        </div>
      ) : (
        <ConJoinedImages
          array={[
            {
              src: user?.avatar,
              name: `${user?.first_name || ""} ${user?.last_name || ""}`,
              href: "/",
            },
            {
              src: companies?.[0]?.logo || "",
              name: companies?.[0]?.company_name || "",
              href:
                companies?.length > 0
                  ? `/${companies[0].company_name
                      .toLowerCase()
                      .replace(" ", "_")}`
                  : "/create-company",
            },
          ]}
        />
      )}

      <FeedSearch className="max-xs:hidden" />

      <div className="flex items-center gap-3 sm:gap-5 pr-2">
        <NotificationPopOver />
        <LinkWithTooltipIcon
          IconName={ChartBar}
          to="/analysis"
          tip="Analysis"
        />
        <LinkWithTooltipIcon IconName={Setting} to="/settings" tip="Settings" />
        <button onClick={() => toggleNav(true)} className="md:hidden">
          <Menu />
        </button>
      </div>
    </div>
  );
}

export default ResponsiveNav;

export const avatarStyle = "!bg-gold !text-black border-2 border-white";

export const ConJoinedImages = ({
  size = 40,
  array,
  animate = true,
  className,
  sizeVariant,
}) => {
  return (
    <div className="flex group w-fit">
      {array.map(({ src, name, href }, index) => (
        <Link to={href} key={index}>
          <Avatar
            src={src}
            name={name}
            size={sizeVariant}
            style={{
              transform: `translateX(-${5 * index}px)`,
              width: `${size}px`,
              height: `${size}px`,
            }}
            className={clsx(
              "rounded-full transition-transform duration-500",
              avatarStyle,
              className,
              {
                "group-hover:!translate-x-2 delay-200": animate,
              }
            )}
          />
        </Link>
      ))}
    </div>
  );
};
