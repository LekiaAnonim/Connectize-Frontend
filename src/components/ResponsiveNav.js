import React from "react";
import { useNav } from "../context/navContext";
import { Menu } from "@mui/icons-material";
import clsx from "clsx";
import { ChartBar, Notification, Setting } from "../icon";
import FeedSearch from "./admin/feeds/FeedSearch";

function ResponsiveNav() {
  const { navOpen, toggleNav } = useNav();
  const images = ["/images/iconlove.png", "/images/iconprofile.PNG"];
  return (
    <div className="flex justify-between items-center gap-2 sm:gap-4 w-full mb-4 max-md:mt-2">
      <ConJoinedImages array={images} />

      <FeedSearch className="max-sm:hidden" />

      <div className="flex items-center gap-3 sm:gap-5 pr-2">
        <button>
          <Notification />
        </button>
        <button>
          <ChartBar />
        </button>
        <button>
          <Setting />
        </button>

        <button onClick={() => toggleNav(!navOpen)} className="md:hidden">
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
          alt="images row joined together"
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
