import React from "react";
import { Link } from "react-router-dom";
import { VerifiedIcon } from "../icon";

export default function Username({ user }) {
  return (
    <div className="flex items-center">
      <Link
        to={`/co/${user?.id}`}
        className="font-semibold line-clamp-1 break-all"
      >
        {user?.first_name || "No"} {user?.last_name || "Name"}
      </Link>

      {user?.verified && <VerifiedIcon color="black" />}
    </div>
  );
}
