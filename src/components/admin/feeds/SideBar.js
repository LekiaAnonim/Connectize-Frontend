import React from "react";
import { Link } from "react-router-dom";
import { feedNavItems } from "../../../lib/data";
import Logo from "../../logo";

const Sidebar = () => {
  return (
    <div className="bg-gray-50 rounded p-4 w-full md:w-1/4 lg:w-1/5 min-h-screen">
      <div className="flex items-center mb-4">
        <Logo />
      </div>
      <nav className="mb-8">
        <ul className="space-y-2 xs:text-sm">
          {feedNavItems.map((item) => (
            <li className="transition-colors duration-300">
              <Link
                key={item.to}
                to={item.to.toLowerCase()}
                className="mb-2 text-black cursor-pointer flex gap-2 items-center"
              >
                <>{item.icon}</>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <h2 className="font-semibold mb-4">Companies</h2>
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
