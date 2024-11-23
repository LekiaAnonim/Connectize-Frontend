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

const Navbar = () => {
  const weirdFlex = "flex w-full gap-4 md:!gap-6 items-center justify-between";
  const groupFlex = "flex w-full gap-4 md:!gap-3 xl:!gap-6 items-center";
  return (
    <Headroom>
      <section className="w-full h-16 flex items-center bg-white">
        <nav className="max-md:container w-full py-2 md:px-4 flex items-center justify-between gap-2 lg:!gap-10 xl:!gap-14">
          <div className={weirdFlex}>
            <Logo />
            <div className={groupFlex}>
              <NavItemIcon
                IconName={HomeIcon}
                text="Home"
                to="/"
                className="max-lg:hidden"
              />
              <NavItemIcon
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
              <NavItemIcon
                IconName={ChartBar}
                to="/analysis"
                tip="Analysis"
                className="max-xs:hidden"
              />
              <NavItemIcon
                IconName={StoreIcon}
                to="/market"
                tip="Market"
                className="max-sm:hidden"
              />
              <NavItemIcon
                IconName={UserGroup}
                to="/organization"
                tip="Organization"
                className="max-md:hidden"
              />
              <NavItemIcon IconName={Setting} to="/settings" tip="Settings" />

              <MoreOptions className="mx-2 md:!hidden" triggerStyle="md:hidden">
                <NavItemIcon
                  IconName={ChartBar}
                  to="/analysis"
                  text="Analysis"
                  className="xs:hidden"
                />
                <NavItemIcon
                  IconName={StoreIcon}
                  to="/market"
                  text="Market"
                  className="pt-3 sm:hidden"
                />
                <NavItemIcon
                  IconName={Message}
                  to="/messages"
                  text="Messages"
                  className="pt-3 md:hidden"
                />

                <NavItemIcon
                  IconName={UserGroup}
                  to="/organization"
                  text="Organization"
                  className="pt-3 md:hidden"
                />
              </MoreOptions>
            </div>

            <ProfilePicture />
          </div>
        </nav>
      </section>
    </Headroom>
  );
};

export default Navbar;

function ProfilePicture() {
  const { user } = useAuth();

  return (
    <img
      src={user?.avatar || "/images/iconprofile.PNG"}
      alt={user?.first_name + " " + user?.last_name || "User"}
      className="size-[35px] rounded-full "
    />
  );
}

function NavItemIcon({ IconName, text, to, tip, className, tooltipClassName }) {
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
          "flex items-center font-bold text-sm gap-2 text-gray-400 hover:text-custom_blue transition-colors duration-300",
          className
        )}
      >
        <IconName />
        {text && <span>{text}</span>}
      </Link>
    </Tooltip>
  );
}
