import React from "react";
import { useNav } from "../context/navContext";
import clsx from "clsx";

const CloseOverlay = () => {
  const { navOpen, toggleNav } = useNav();
  return (
    <div
      onClick={() => toggleNav(false)}
      className={clsx(
        "fixed bg-black/5 w-screen h-screen top-0 left-0 rounded-none z-[1000] transition-all duration-500",
        {
          "opacity-0 -z-[10000] invisible": !navOpen,
        }
      )}
    />
  );
};

export default CloseOverlay;
