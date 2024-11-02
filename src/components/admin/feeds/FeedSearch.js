import clsx from "clsx";
import React from "react";

function FeedSearch({ className }) {
  return (
    <input
      type="text"
      placeholder="Search anything..."
      className={clsx(
        "w-full xs:max-w-[200px] sm:max-w-[250px] max-w-[250px] py-1.5 px-3 border border-gray-200 rounded-full placeholder:text-sm text-sm focus:outline-1 outline-gold transition-all duration-300",
        className
      )}
    />
  );
}

export default FeedSearch;
