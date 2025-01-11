import React from "react";
import { CategoryIcon, ChartBar, StoreIcon, UserGroup } from "../../../icon";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "@mui/icons-material";
import HeadingText from "../../HeadingText";
import clsx from "clsx";
import { useMediaQuery } from "react-responsive";
import { useNav } from "../../../context/navContext";
import { CloseButton } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { getProductCategories } from "../../../api-services/products";
import { getServiceCategories } from "../../../api-services/services";
import CloseOverlay from "../../CloseOverlay";
import LightParagraph from "../../ParagraphText";
import { CirceTitleSubtitleSkeleton } from "../feeds/TopServiceSuggestions";

const marketPlaceItems = [
  {
    name: "Market",
    icon: StoreIcon,
    to: "/market",
  },
  {
    name: "Services",
    icon: UserGroup,
    to: "/services",
  },
  {
    name: "Analysis",
    icon: ChartBar,
    to: "/analysis",
  },
];

function SidebarMenu() {
  const { navOpen, toggleNav } = useNav();
  const { pathname } = useLocation();

  const isTablet = useMediaQuery({ minWidth: 768 });

  if (isTablet) toggleNav(false);
  return (
    <>
      <CloseOverlay />
      <section
        className={clsx(
          "max-md:absolute max-md:top-0 max-md:left-0 max-md:h-screen bg-white rounded-md p-4 shrink-0 max-w-[300px] md:w-[240px] lg:w-[260px] 2xl:w-[280px] min-h-screen max-md:transition-all duration-500 ease-out scrollbar-hidden max-md:!py-6 max-md:shadow md:sticky md:top-2 overflow-y-auto md:max-h-screen",
          {
            "overflow-y-auto max-md:min-w-[300px] max-md:w-[60%] z-[20000]":
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
          to={pathname.startsWith("/services") ? "/services/add" : "/listing"}
          className="flex items-center justify-between rounded-full bg-dark !text-white text-sm py-2.5 px-3 w-full mb-4 mt-2"
        >
          <span>
            {pathname.startsWith("/services")
              ? "Add New Service"
              : "List New Product"}
          </span>
          <ChevronRight className="!size-5 text-gray-200" />
        </Link>
        <ProductCategory pathname={pathname} />
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
      <HeadingText>
        {pathname.startsWith("/services") ? "Services" : "Marketplace"}
      </HeadingText>
      <div className="space-y-2 xs:text-sm p-2">
        {marketPlaceItems.map((item, index) => {
          return (
            <Link
              key={index}
              to={item.to}
              onClick={() => toggleNav(false)}
              className={clsx(
                "flex gap-2 items-center transition-colors duration-300 p-2 rounded-md",
                {
                  "!text-gold !bg-mid_grey": pathname.startsWith(item.to),
                  "!text-gray-500 hover:!text-mid_grey": !pathname.startsWith(
                    item.to
                  ),
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

function ProductCategory({ pathname }) {
  const { toggleNav } = useNav();

  const { data: categories, isLoading } = useQuery({
    queryKey: pathname.startsWith("/services")
      ? ["serviceCategories"]
      : ["productCategories"],
    queryFn: pathname.startsWith("/services")
      ? getServiceCategories
      : getProductCategories,
    enabled: !!pathname,
  });

  return (
    <section className="space-y-2">
      <div className="flex gap-2 items-center">
        <CategoryIcon />
        <HeadingText>Category</HeadingText>
      </div>
      <div className="space-y-2 xs:text-sm p-2">
        {isLoading ? (
          Array.from({ length: 5 }, (_, index) => (
            <CirceTitleSubtitleSkeleton key={index} />
          ))
        ) : !categories?.length ? (
          <LightParagraph>No categories available</LightParagraph>
        ) : (
          categories?.map((item, index) => (
            <Link
              to={
                (pathname.startsWith("/services") ? "/services" : "/market") +
                "?category=" +
                item.name.toLowerCase()
              }
              key={index}
              onClick={() => toggleNav(false)}
              className="flex items-center gap-2 p-2"
            >
              <span className="size-5 bg-dark rounded-full shrink-0" />
              <span className="line-clamp-2">{item.name}</span>
            </Link>
          ))
        )}
      </div>
    </section>
  );
}
