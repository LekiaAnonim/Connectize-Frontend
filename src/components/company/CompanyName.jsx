import React from "react";
import { Link } from "react-router-dom";
import { VerifiedIcon } from "../../icon";
import clsx from "clsx";

export default function CompanyName({ name, verified, size = "sm" }) {
  return (
    <div className="flex items-center">
      <Link
        to={"/" + name}
        className={clsx("text-lg font-bold break-all line-clamp-1", {
          "xs:text-sm": size === "sm",
          "xs:text-base": size === "md",
        })}
      >
        {name}
      </Link>
      {verified && <VerifiedIcon color="black" />}
    </div>
  );
}
