import React from "react";
import { Link } from "react-router-dom";
import { VerifiedIcon } from "../icon";
import clsx from "clsx";

export default function Username({ user, noClick = false }) {
  return (
    <div className="flex items-center">
      <Link
        to={`/co/${user?.id}`}
        className={clsx("font-semibold line-clamp-1 break-all", {
          "pointer-events-none": noClick,
        })}
      >
        {user?.first_name || "No"} {user?.last_name || "username"}
      </Link>

      {user?.verified && <VerifiedIcon color="black" />}
    </div>
  );
}
