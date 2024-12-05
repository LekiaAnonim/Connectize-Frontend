import React from "react";
import Logo from "../logo";
import MoreOptions from "../MoreOptions";
import Headroom from "react-headroom";
import { useAuth } from "../../context/userContext";
import { Tooltip } from "@chakra-ui/react";

import {
  ChartBar,
  HomeIcon,
  Message,
  Setting,
  StoreIcon,
  UserGroup,
} from "../../icon";
import FeedSearch from "../../components/admin/feeds/FeedSearch";
import { NotificationPopOver } from "../../components/notifications";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { SearchPopOver } from "../SearchPopOver";
import { useNav } from "../../context/navContext";

import { Menu } from "@mui/icons-material";

const Navbar = ({ isUserProfile }) => {
  const { toggleNav } = useNav();
  const weirdFlex = "flex w-full gap-4 md:!gap-6 items-center justify-between";
  const groupFlex = "flex w-full gap-4 md:!gap-3 xl:!gap-6 items-center";
  return (
    <Headroom>
      <nav className="w-full h-20 flex items-center bg-white">
        <section className="max-md:container w-full py-2 md:px-4 flex items-center justify-between gap-2 lg:!gap-10 xl:!gap-14">
          <div className={weirdFlex}>
            <Logo />
            <div className={groupFlex}>
              <LinkWithTooltipIcon
                IconName={HomeIcon}
                text="Home"
                to="/"
                className="max-lg:hidden"
              />
              <LinkWithTooltipIcon
                IconName={Message}
                to="/messages"
                tip="Messages"
                className="max-md:hidden"
              />
              <SearchPopOver />
            </div>
          </div>

          <FeedSearch className="max-md:hidden" />

          <div className={weirdFlex}>
            <div className={groupFlex}>
              <NotificationPopOver />
              <LinkWithTooltipIcon
                IconName={ChartBar}
                to="/analysis"
                tip="Analysis"
                className="max-sm:hidden"
              />
              <LinkWithTooltipIcon
                IconName={StoreIcon}
                to="/market"
                tip="Market"
                className="max-sm:hidden"
              />
              <LinkWithTooltipIcon
                IconName={UserGroup}
                to="/services"
                tip="Services"
                className="max-md:hidden"
              />
              <LinkWithTooltipIcon
                IconName={Setting}
                to="/settings"
                tip="Settings"
                className="max-xs:hidden"
              />

              <MoreOptions className="mx-2 md:!hidden" triggerStyle="md:hidden">
                <LinkWithTooltipIcon
                  IconName={ChartBar}
                  to="/analysis"
                  text="Analysis"
                  className="sm:hidden"
                />
                <LinkWithTooltipIcon
                  IconName={StoreIcon}
                  to="/market"
                  text="Market"
                  className="pt-3 sm:hidden"
                />
                <LinkWithTooltipIcon
                  IconName={Message}
                  to="/messages"
                  text="Messages"
                  className="pt-3 md:hidden"
                />

                <LinkWithTooltipIcon
                  IconName={UserGroup}
                  to="/services"
                  text="Services"
                  className="pt-3 md:hidden"
                />

                <LinkWithTooltipIcon
                  IconName={Setting}
                  to="/settings"
                  text="Settings"
                  className="pt-3 xs:hidden"
                />
              </MoreOptions>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <ProfilePicture />
              {!isUserProfile && (
                <button onClick={() => toggleNav(true)} className="md:hidden">
                  <Menu />
                </button>
              )}
            </div>
          </div>
        </section>
      </nav>
    </Headroom>
  );
};

export default Navbar;

function ProfilePicture() {
  const { user } = useAuth();

  return (
    // <Link to="/user-profile">
    <img
      src={user?.avatar || "/images/iconprofile.PNG"}
      alt={user?.first_name + " " + user?.last_name || "User"}
      className="size-[35px] rounded-full "
    />
    // </Link>
  );
}

export function LinkWithTooltipIcon({
  IconName,
  text,
  to,
  tip,
  className,
  tooltipClassName,
}) {
  return (
    <Tooltip
      label={tip}
      fontSize="sm"
      placement="auto"
      className={clsx(
        "!rounded-md bg-white !text-custom_blue border",
        tooltipClassName
      )}
    >
      <Link
        to={to}
        className={clsx(
          "flex items-center font-bold text-sm gap-3 text-gray-400 hover:text-custom_blue transition-colors duration-300",
          className
        )}
      >
        <IconName />
        {text && <span>{text}</span>}
      </Link>
    </Tooltip>
  );
}
