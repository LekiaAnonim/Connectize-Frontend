import React from "react";
import {
  CategoryIcon,
  ChartBar,
  Notification,
  StoreIcon,
  UserGroup,
} from "../../../icon";
import "../services/navbar.css";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "@mui/icons-material";
import HeadingText from "../../HeadingText";
import clsx from "clsx";

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
  return (
    <section className="bg-white p-3 w-full md:max-w-[250px] shrink-0 rounded-md">
      <MarketPlaceNavigation />
      <Link
        to="/listing"
        className="flex items-center justify-between rounded-full bg-dark text-white text-sm py-2.5 px-3 w-full mb-4 mt-2"
      >
        <span>List New Product</span>
        <ChevronRight className="!size-5 text-gray-200" />
      </Link>
      <ProductCategory />
    </section>
  );
}

export default SidebarMenu;

function MarketPlaceNavigation() {
  const { pathname } = useLocation();
  return (
    <section className="space-y-2">
      <HeadingText>Marketplace</HeadingText>
      <div className="space-y-2 xs:text-sm p-2">
        {marketPlaceItems.map((item, index) => {
          return (
            <Link
              key={index}
              to={item.to}
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
  return (
    <section className="space-y-2">
      <div className="flex gap-2 items-center">
        <CategoryIcon />
        <HeadingText>Category</HeadingText>
      </div>
      <div className="space-y-2 xs:text-sm p-2">
        {categories.map((item, index) => (
          <Link to="" key={index} className="flex gap-2 p-2">
            <span className="size-5 bg-dark rounded-full" />
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
