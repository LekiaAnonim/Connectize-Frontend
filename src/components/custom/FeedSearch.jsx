import { SearchOutlined } from "@ant-design/icons";
import clsx from "clsx";
import React from "react";
import { useCustomSearchParams } from "../../hooks/useCustomSearchParams";
import ReusableModal from "./ResusableModal";
import { SearchTab } from "../../pages/search";
import { Link } from "react-router-dom";

function FeedSearch({ className }) {
  const { updateSearchParams, searchParams, pathname } =
    useCustomSearchParams();

  const searchQuery = searchParams.get("search_query") || "";

  const handleSearch = (evt) => {
    const value = evt.currentTarget.value;

    if (evt.key === "Enter") {
      if (value.trim()) {
        updateSearchParams({ search_query: value });
      } else {
        updateSearchParams({ search_query: null });
      }
    }
  };
  return (
    <>
      <div className="relative">
        <SearchOutlined className="absolute top-1/2 -translate-y-1/2 left-2.5 size-3 text-gray-400" />
        <input
          type="search"
          placeholder="Search anything..."
          onKeyUp={handleSearch}
          defaultValue={searchQuery}
          className={clsx(
            "block w-full xs:!max-w-[250px] sm:!w-[400px] !max-w-[250px] py-1.5 px-3 border border-gray-200 bg-gray-100/70 rounded-full placeholder:text-xs text-sm focus:outline-0 focus:border-gold transition-all duration-300 indent-4",
            className
          )}
        />
      </div>

      <ReusableModal
        isOpen={searchQuery && pathname !== "/search"}
        onClose={() => updateSearchParams({ search_query: null })}
        footerContent={<></>}
        title={
          <div className="flex items-baseline gap-1">
            <span>Search Results for</span>{" "}
            <Link
              to={`/search?search_query=${searchQuery}`}
              className="!underline"
            >
              {searchQuery}
            </Link>
          </div>
        }
        size="2xl"
      >
        <SearchTab />
      </ReusableModal>
    </>
  );
}

export default FeedSearch;
