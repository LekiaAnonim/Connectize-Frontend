import React from "react";
import { useNav } from "../context/navContext";
import { Menu } from "@mui/icons-material";
import clsx from "clsx";
import { ChartBar, Notification, Setting } from "../icon";

function ResponsiveNav() {
  const { navOpen, toggleNav } = useNav();
  const images = ["/images/iconlove.png", "/images/iconprofile.PNG"];
  return (
    <div className="flex justify-between items-center gap-2 sm:gap-4 w-full mb-4 max-md:mt-2">
      <ConJoinedImages array={images} />
      <input
        type="text"
        placeholder="Search anything..."
        className="w-full max-w-[200px] py-1 px-3 border border-gray-200 rounded-full placeholder:text-sm text-sm focus:outline-0"
      />

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

export const ConJoinedImages = ({ size = 40, array }) => {
  return (
    <div className="flex">
      {array.map((src, index) => (
        <img
          key={index}
          src={src}
          alt="images row joined together"
          width={size}
          height={size}
          className={clsx("rounded-full -translate-x-3 first:translate-x-0")}
        />
      ))}
    </div>
  );
};
