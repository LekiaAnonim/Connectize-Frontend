import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import clsx from "clsx";
import { PostCard } from "../feeds/DiscoverPostTabs";

function ServiceMain() {
  const tabsStyle = "rounded-full font-medium lg:!text-base !text-sm";
  const selectedStyle = { color: "black", bg: "#F1C644" };
  return (
    <Tabs variant="solid-rounded" className="space-y-4">
      <TabList className="gap-2 sm:gap-4 p-2 bg-white rounded-md">
        <Tab className={clsx("", tabsStyle)} _selected={selectedStyle}>
          Featured
        </Tab>
        <Tab className={clsx("", tabsStyle)} _selected={selectedStyle}>
          Most Recent
        </Tab>
        <Tab className={clsx("", tabsStyle)} _selected={selectedStyle}>
          Best Matches
        </Tab>
      </TabList>

      <TabPanels className="!w-full">
        <TabPanel className="p-0 !w-full">
          <PostCardWrapper />
        </TabPanel>
        <TabPanel className="p-0 !w-full">
          <PostCardWrapper />
        </TabPanel>
        <TabPanel className="p-0 !w-full">
          <PostCardWrapper />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default ServiceMain;

export const PostCardWrapper = ({ postArray }) => {
  return (
    <section className="min-h-screen bg-white p-2 grid gap-x-3 gap-y-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
      {Array.from({ length: 10 }, (_, index) => (
        <PostCard key={index} isService />
      ))}
    </section>
  );
};
