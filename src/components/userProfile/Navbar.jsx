import React from "react";
import Logo from "../logo";
import Headroom from "react-headroom";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import FeedSearch from "../../components/admin/feeds/FeedSearch";
import { NotificationPopOver } from "../../components/notifications";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { JoinedUserCompanyImages } from "../ResponsiveNav";
import { Tooltip } from "@chakra-ui/react";
import { NavigationSection } from "../admin/feeds/SideBar";

const Navbar = () => {
  const weirdFlex = "flex w-full gap-4 md:!gap-6 items-center";
  const [showBottomNav, setShowBottomNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowBottomNav(false);
    } else {
      setShowBottomNav(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  return (
    <>
      <Headroom>
        <nav className="w-full h-16 flex items-center bg-white">
          <section className="container w-full py-2 md:px-4 flex items-center justify-between !gap-2 lg:!gap-10 xl:!gap-14">
            <div className={weirdFlex}>
              <Logo size="50px" />
              <FeedSearch />
            </div>

            <div className="flex items-center gap-3 xs:gap-5 md:gap-7 shrink-0">
              <NotificationPopOver />
              <JoinedUserCompanyImages />
            </div>
          </section>
        </nav>
      </Headroom>

      <motion.nav
        className="md:hidden bg-gold fixed bottom-0 left-0 w-full z-[999999999999]"
        initial={{ y: 0 }}
        animate={{ y: showBottomNav ? 0 : 100 }}
        transition={{ type: "tween", stiffness: 300 }}
      >
        <section className="container">
          <NavigationSection hasHeader />
        </section>
      </motion.nav>
    </>
  );
};

export default Navbar;

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
        "!rounded-md !bg-white !text-custom_blue border",
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
