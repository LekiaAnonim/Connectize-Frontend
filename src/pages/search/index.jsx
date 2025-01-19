import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import clsx from "clsx";
import DiscoverPosts from "../../components/admin/feeds/DiscoverPosts";
import { PostCard } from "../../components/admin/feeds/DiscoverPostTabs";
import { ProductListCard } from "../../components/admin/markets/newlyListed";
import { CompaniesArray } from "../companies";
import CustomTabs from "../../components/custom/tabs";

export default function Search() {
  return (
    <section>
      <SearchTab />
    </section>
  );
}

export const SearchTab = ({ isSearch }) => {
  const tabsHeading = ["Posts", "Companies", "People", "Products", "Services"];
  const tabsPanels = [
    <DiscoverPosts />,
    <CompaniesArray hasFilter={false} isSearch={isSearch} />,
    <CompaniesArray hasFilter={false} isSearch={isSearch} />,
    <div className="grid gap-x-3 gap-y-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {[1, 2, 3, 4]?.map((service, index) => (
        <ProductListCard key={index} />
      ))}
    </div>,
    <div className="grid gap-x-3 gap-y-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {[1, 2, 3, 4]?.map((service, index) => (
        <PostCard
          key={index}
          companyName={service?.company}
          verified={service?.companyInfo?.verified}
          logo={service?.companyInfo?.logo}
          title={service?.title}
          summary={service?.sub_title}
          url={`/services/${service?.id}`}
          whole={service}
          isService
        />
      ))}
    </div>,
  ];

  return <CustomTabs tabsPanels={tabsPanels} tabsHeading={tabsHeading} />;
};
