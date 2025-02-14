import { Link, useLocation } from "react-router-dom";
import { useNav } from "../context/navContext";
import { useAuth } from "../context/userContext";
import { getSession } from "../lib/session";
import { useState } from "react";
import { logOutCurrentUser } from "../api-services/users";
import clsx from "clsx";
import { feedNavItems } from "../lib/data";
import { LogoutOutlined } from "@ant-design/icons";
import { ButtonWithTooltipIcon } from "./admin/feeds/DiscoverPosts";
import ReusableModal from "./custom/ResusableModal";
import LightParagraph from "./ParagraphText";

export function NavigationSection({ hasHeader, isSmallNavigation = false }) {
  const { pathname } = useLocation();
  const { toggleNav } = useNav();
  const { user: currentUser } = useAuth();
  const session = getSession();
  const [loading, setLoading] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    setLoading(true);

    logOutCurrentUser();
    setLoading(false);
  };

  const navigators = isSmallNavigation
    ? feedNavItems.slice(0, 5)
    : feedNavItems;

  return (
    <ul
      className={clsx("xs:text-sm", {
        "flex items-baseline justify-between": hasHeader,
        "bg-background rounded p-2 mb-6 space-y-1": !hasHeader,
      })}
    >
      {navigators.map((item, index) => (
        <li key={index}>
          <Link
            to={item.to}
            onClick={() => toggleNav(false)}
            className={clsx(
              "flex gap-2 items-center transition-all active:scale-90 duration-300 p-2 py-2.5  xs:hover:!text-mid_grey",
              {
                "bg-mid_grey pointer-events-none": item.to === pathname,
                "!text-gold rounded": item.to === pathname && !hasHeader,
                "!text-white": item.to === pathname && hasHeader,
                "!text-gray-500": item.to !== pathname,
                "flex-col text-xs xs:text-[.65rem] ": hasHeader,
              }
            )}
          >
            <ButtonWithTooltipIcon
              IconName={item.icon}
              tip={item.name}
              iconClassName={clsx(
                "hover:!text-mid_grey text-xl !size-5 xs:!size-4",
                {
                  "!text-gold rounded": item.to === pathname && !hasHeader,
                  "!text-white": item.to === pathname && hasHeader,
                  "!text-gray-500": item.to !== pathname,
                }
              )}
            />
            <span className="max-sm:sr-only">{item.name}</span>
          </Link>
        </li>
      ))}
      {currentUser && session && (
        <>
          <ReusableModal
            onClose={() => setIsOpen(false)}
            isOpen={isOpen}
            primaryAction={handleLogout}
            title="Are you sure you want logout?"
            secondaryText="Cancel"
          >
            <LightParagraph>
              You are about to make your current session invalid
            </LightParagraph>
          </ReusableModal>
          <li>
            <button
              className={clsx(
                "flex gap-2 items-center transition-colors duration-300 p-2 rounded  hover:text-red-600 text-gray-600 disabled:cursor-not-allowed disabled:text-red-600",
                {
                  "flex-col": hasHeader,
                }
              )}
              onClick={() => setIsOpen(true)}
              disabled={loading}
            >
              <LogoutOutlined className="xs:text-xs" />
              <span
                className={clsx({
                  "text-[.65rem] max-sm:sr-only": hasHeader,
                })}
              >
                {loading ? "Logging out..." : "Logout"}
              </span>
            </button>
          </li>
        </>
      )}
    </ul>
  );
}
