import React from "react";
import { GreaterThan } from "../../icon";
import Logo from "../logo";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

const navItems = [
  { name: "Personal Information", to: "/home" },
  { name: "Contact", to: "/contact" },
  { name: "Address", to: "/address" },
];

function ProfileNavBar() {
  const { pathname } = useLocation();
  return (
    <section>
      <section className="container">
        <Logo />
      </section>
      <nav>
        <ul className="container py-2 flex flex-wrap gap-3">
          {navItems.map(({ name, to }) => {
            return (
              <li key={to} className="flex items-center gap-1">
                <Link
                  to={to}
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
                <GreaterThan />
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
}

export default ProfileNavBar;
