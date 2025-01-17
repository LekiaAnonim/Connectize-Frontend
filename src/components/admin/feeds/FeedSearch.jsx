import { SearchOutlined } from "@ant-design/icons";
import clsx from "clsx";
import React from "react";

function FeedSearch({ className }) {
  return (
    <div className="relative">
      <SearchOutlined className="absolute top-1/2 -translate-y-1/2 left-2.5 size-3 text-gray-400" />
      <input
        type="text"
        placeholder="Search anything..."
        className={clsx(
          "w-full xs:!max-w-[200px] sm:!max-w-[400px] max-w-[250px] py-1.5 px-3 border border-gray-200 bg-gray-100/70 rounded-full placeholder:text-xs text-sm focus:outline-0 focus:border-gray-500 transition-all duration-300 indent-4",
          className
        )}
      />
    </div>
  );
}

export default FeedSearch;
