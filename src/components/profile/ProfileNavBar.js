import React from "react";
import { GreaterThan } from "../../icon";
import Logo from "../logo";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import Headroom from "react-headroom";

function ProfileNavBar() {
  const { pathname } = useLocation();
  const navItems = [
    {
      name: pathname !== "/bio" ? "Personal Information" : "...",
      to: "/home",
      isLast: false,
    },
    { name: "Contact", to: "/contact", isLast: false },
    { name: "Address", to: "/address", isLast: false },
    { name: pathname === "/bio" ? "Bio" : "...", to: "/bio", isLast: true },
  ];
  return (
    <Headroom>
      <nav className="bg-white w-full z-[1000000]">
        <section className="container max-w-screen-lg flex gap-x-4 flex-wrap justify-between py-2">
          <Logo />

          {pathname !== "/overview" && (
            <ul className="py-2 flex flex-wrap gap-3 pointer-events-none">
              {navItems.map(({ name, to, isLast }) => {
                return (
                  <li key={to} className="flex items-center gap-1">
                    <Link
                      to={to}
                      about={name}
                      className={clsx(
                        "transition-all duration-300 text-gray-500 hover:text-black",
                        {
                          "border-b-2 border-black text-black pointer-events-none":
                            pathname === to,
                        }
                      )}
                    >
                      {name}
                    </Link>
                    {!isLast && <GreaterThan />}
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </nav>
    </Headroom>
  );
}

export default ProfileNavBar;
