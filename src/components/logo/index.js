import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

function Logo({ className, url = "/", height = "60px", width = "60px" }) {
  return (
    <Link
      to={url}
      className={clsx("w-fit block transition-all duration-500", className)}
    >
      <img
        src="/images/logo.png"
        style={{ height, width }}
        alt="connectize logo"
      />
    </Link>
  );
}

export default Logo;
