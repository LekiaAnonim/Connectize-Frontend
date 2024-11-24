import React from "react";
import {
  CategoryIcon,
  ChartBar,
  Notification,
  StoreIcon,
  UserGroup,
} from "../../../icon";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "@mui/icons-material";
import HeadingText from "../../HeadingText";
import clsx from "clsx";
import { useMediaQuery } from "react-responsive";
import { useNav } from "../../../context/navContext";
import { Button, CloseButton } from "@chakra-ui/react";

const marketPlaceItems = [
  {
    name: "Market",
    icon: StoreIcon,
    to: "/market",
  },
  {
    name: "Organization",
    icon: UserGroup,
    to: "/organization",
  },
  {
    name: "Analysis",
    icon: ChartBar,
    to: "/analysis",
  },
  {
    name: "Services",
    icon: Notification,
    to: "/service",
  },
];

function SidebarMenu({ isService }) {
  const { navOpen, toggleNav } = useNav();

  const isTablet = useMediaQuery({ minWidth: 768 });

  if (isTablet) toggleNav(false);
  return (
    // <section className="bg-white p-3 w-full md:max-w-[250px] shrink-0 rounded-md">

    <>
      <div
        onClick={() => toggleNav(false)}
        className={clsx(
          "absolute bg-black/5 w-screen h-screen top-0 left-0 rounded-none z-[1000] transition-all duration-500",
          {
            "opacity-0 -z-[10000] scale-0": !navOpen,
          }
        )}
      />
      <section
        className={clsx(
          "max-md:absolute max-md:top-0 max-md:left-0 max-md:h-screen bg-white rounded-md p-4 shrink-0 max-w-[300px] md:w-[240px] lg:w-[260px] 2xl:w-[280px] min-h-screen max-md:transition-all duration-500 ease-out scrollbar-hidden max-md:!py-6 max-md:shadow",
          {
            "max-md:overflow-y-auto max-md:min-w-[300px] max-md:w-[60%] z-[20000]":
              navOpen,
            "max-md:overflow-hidden max-md:-left-full max-md:opacity-0 max-md:-z-[20000]":
              !navOpen,
          }
        )}
      >
        <CloseButton
          className="justify-self-end -translate-y-3 translate-x-4 md:!hidden"
          onClick={() => toggleNav(false)}
        />
        <MarketPlaceNavigation />
        <Link
          onClick={() => toggleNav(false)}
          to="/listing"
          className="flex items-center justify-between rounded-full bg-dark text-white text-sm py-2.5 px-3 w-full mb-4 mt-2"
        >
          <span>List New Product</span>
          <ChevronRight className="!size-5 text-gray-200" />
        </Link>
        <ProductCategory />
      </section>
    </>
  );
}

export default SidebarMenu;

function MarketPlaceNavigation() {
  const { pathname } = useLocation();
  const { toggleNav } = useNav();
  return (
    <section className="space-y-2">
      <HeadingText>Marketplace</HeadingText>
      <div className="space-y-2 xs:text-sm p-2">
        {marketPlaceItems.map((item, index) => {
          return (
            <Link
              key={index}
              to={item.to}
              onClick={() => toggleNav(false)}
              className={clsx(
                "flex gap-2 items-center transition-colors duration-300 p-2 rounded hover:!text-mid_grey",
                {
                  "!text-gold !bg-mid_grey pointer-events-none":
                    item.to === pathname,
                  "!text-gray-500": item.to !== pathname,
                }
              )}
            >
              <item.icon />
              <span className="text-sm font-semibold">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

const categories = [
  {
    name: "Newly listed",
    image: "",
  },
  {
    name: "Black gold",
    image: "",
  },
  {
    name: "Oil barrels",
    image: "",
  },
  {
    name: "Imported",
    image: "",
  },
  {
    name: "Refined",
    image: "",
  },
  {
    name: "Tested",
    image: "",
  },
];

function ProductCategory() {
  const { toggleNav } = useNav();
  return (
    <section className="space-y-2">
      <div className="flex gap-2 items-center">
        <CategoryIcon />
        <HeadingText>Category</HeadingText>
      </div>
      <div className="space-y-2 xs:text-sm p-2">
        {categories.map((item, index) => (
          <Link
            to=""
            key={index}
            onClick={() => toggleNav(false)}
            className="flex gap-2 p-2"
          >
            <span className="size-5 bg-dark rounded-full" />
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
