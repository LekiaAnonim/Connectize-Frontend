import React from "react";
import Logo from "./logo";
import { useNav } from "../context/navContext";
import { Menu } from "@mui/icons-material";
import Headroom from "react-headroom";

function ResponsiveNav() {
  const { navOpen, toggleNav } = useNav();
  return (
    <Headroom >
      <div className="md:hidden flex justify-between items-center container w-full bg-white">
        <Logo className={navOpen ? "w-0" : ""} />
        <button onClick={() => toggleNav(!navOpen)}>
          <Menu />
        </button>
      </div>
    </Headroom>
  );
}

export default ResponsiveNav;
