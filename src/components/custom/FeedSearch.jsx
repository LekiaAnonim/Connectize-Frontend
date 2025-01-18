import { SearchOutlined } from "@ant-design/icons";
import clsx from "clsx";
import React from "react";
import { useCustomSearchParams } from "../../hooks/useCustomSearchParams";
import ReusableModal from "./ResusableModal";
import { SearchTab } from "../../pages/search";

function FeedSearch({ className }) {
  const { updateSearchParams, searchParams } = useCustomSearchParams();

  const searchQuery = searchParams.get("search_query");

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
          type="text"
          placeholder="Search anything..."
          onKeyUp={handleSearch}
          className={clsx(
            "w-full xs:!max-w-[200px] sm:!max-w-[400px] max-w-[250px] py-1.5 px-3 border border-gray-200 bg-gray-100/70 rounded-full placeholder:text-xs text-sm focus:outline-0 focus:border-gold transition-all duration-300 indent-4",
            className
          )}
        />
      </div>

      <ReusableModal
        isOpen={searchQuery}
        onClose={() => updateSearchParams({ search_query: null })}
        title={"<FeedSearch />"}
        footerContent={<></>}
        size="2xl"
      >
        <SearchTab />
      </ReusableModal>
    </>
  );
}

export default FeedSearch;
