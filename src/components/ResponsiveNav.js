import React from "react";
import { useNav } from "../context/navContext";
import { Menu } from "@mui/icons-material";
import clsx from "clsx";
import { ChartBar, Setting } from "../icon";
import FeedSearch from "./admin/feeds/FeedSearch";
import { NotificationPopOver } from "./notifications";
import { LinkWithTooltipIcon } from "./userProfile/Navbar";

function ResponsiveNav() {
  const { toggleNav } = useNav();
  const headerImages = ["/images/iconlove.png", "/images/iconprofile.PNG"];
  return (
    <div className="flex justify-between items-center gap-2 sm:gap-4 w-full mb-4 max-md:mt-2">
      <ConJoinedImages array={headerImages} />

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

export const ConJoinedImages = ({ size = 40, array, animate = true }) => {
  return (
    <div className="flex group w-fit">
      {array.map((src, index) => (
        <img
          key={index}
          src={src}
          alt="joined together"
          style={{ transform: `translateX(-${5 * index}px)` }}
          width={size}
          height={size}
          className={clsx("rounded-full transition-transform duration-500", {
            "group-hover:!translate-x-2 delay-200": animate,
          })}
        />
      ))}
    </div>
  );
};
