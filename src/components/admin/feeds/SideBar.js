import React from "react";
import { Link, useLocation } from "react-router-dom";
import { feedNavItems } from "../../../lib/data";
import Logo from "../../logo";
import clsx from "clsx";
import { useNav } from "../../../context/navContext";
import { useMediaQuery } from "react-responsive";

const Sidebar = () => {
  const { pathname } = useLocation();
  const { navOpen, toggleNav } = useNav();

  const isTablet = useMediaQuery({ minWidth: 768 });

  if (isTablet) toggleNav(false);

  return (
    <div
      className={clsx(
        "max-md:absolute max-md:top-0 max-md:left-0 max-md:h-screen bg-gray-50 rounded p-4 shrink-0 max-w-[350px] md:w-[240px] lg:w-[260px] 2xl:w-[280px] min-h-screen max-md:transition-all duration-500",
        {
          "max-md:overflow-y-auto max-md:min-w-[300px] max-md:w-[50%] z-[20000]":
            navOpen,
          "max-md:overflow-hidden max-md:-left-[100%] max-md:opacity-0":
            !navOpen,
        }
      )}
    >
      <Logo className="mb-4 md:mx-auto" height="70px" width="70px" />
      <nav className="mb-8">
        <ul className="space-y-1 xs:text-sm px-0">
          {feedNavItems.map((item, index) => (
            <li className="">
              <Link
                key={index}
                to={item.to.toLowerCase()}
                className={clsx(
                  "flex gap-2 items-center transition-colors duration-300 p-2 rounded  hover:text-mid_grey text-custom_grey",
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
      </nav>

      <div>
        <h3 className="font-semibold mb-4">Companies</h3>
        <ul>
          {["Dell", "Huawei", "Starbucks", "NASA"].map((company) => (
            <li key={company} className="flex items-center mb-4">
              <img
                src={`/images/${company.toLowerCase()}.png`}
                alt={company}
                className="size-8 mr-2"
              />
              <span className="text-gray-700">{company}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
