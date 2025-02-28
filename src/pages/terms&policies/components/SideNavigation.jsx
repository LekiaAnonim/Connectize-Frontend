import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function SideNavigation({
  array,
  activeSection,
  setActiveSection,
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const element = document.getElementById(
      activeSection.replace(/\s+/g, "-").toLowerCase()
    );
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeSection]);

  return (
    <div>
      <button className="md:hidden p-4" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <nav
        className={`w-1/4 p-4 border-r ${isOpen ? "block" : "hidden"} md:block`}
      >
        <ul>
          {array[0].details?.map((item, index) => {
            console.log(item);

            return (
              <li key={index} className="mb-2">
                <NavLink
                  to={`#${item.heading.replace(/\s+/g, "-").toLowerCase()}`}
                  className={({ isActive }) =>
                    `block p-2 text-gray-700 hover:!text-gold text-xs ${
                      isActive ? "font-bold" : ""
                    }`
                  }
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
