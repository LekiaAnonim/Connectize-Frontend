import React from "react";
import { Link } from "react-router-dom";
import { VerifiedIcon } from "../../icon";

export default function CompanyName({ name, verified }) {
  return (
    <div className="flex items-center">
      <Link
        to={"/" + name}
        className="text-lg xs:text-sm md:text-sm font-bold break-all line-clamp-1"
      >
        {name}
      </Link>
      {verified && <VerifiedIcon color="black" />}
    </div>
  );
}
