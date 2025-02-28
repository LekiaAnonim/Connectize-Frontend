import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function SideNavigation({
  array,
  activeSection,
  setActiveSection,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const formattedActiveSection = activeSection
    .replace(/\s+/g, "-")
    .toLowerCase();

  useEffect(() => {
    const element = document.getElementById(formattedActiveSection);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [formattedActiveSection]);

  return (
    <div className="relative">
      <button
        className="md:hidden p-4 sticky"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      <nav
        className={`w-full p-4 border-r ${
          isOpen ? "block" : "hidden"
        } md:block`}
      >
        <ul>
          {array[0].details?.map((item, index) => {
            const heading = item.heading.replace(/\s+/g, "-").toLowerCase();
            return (
              <li key={index} className="mb-2">
                <NavLink
                  to={`#${heading}`}
                  className={`block p-2 rounded-md text-gray-700 hover:!bg-gold text-xs ${
                    formattedActiveSection === heading
                      ? "font-semibold !bg-gold"
                      : ""
                  }`}
                  onClick={() => {
                    setActiveSection(item.heading);
                    setIsOpen(false);
                  }}
                >
                  {item.heading}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
