import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import clsx from "clsx";

export default function CustomTabs({
  tabsHeading,
  tabsPanels,
  selectedStyle = { color: "black", bg: "#F1C644" },
  tabsStyle = "w-full rounded-full font-medium !text-xs lg:!text-sm",
}) {
  return (
    <Tabs variant="solid-rounded" className="space-y-4">
      <TabList className="gap-1 !overflow-x-auto">
        {tabsHeading.map((item, index) => (
          <Tab
            key={index}
            className={clsx("", tabsStyle)}
            _selected={selectedStyle}
          >
            {item}
          </Tab>
        ))}
      </TabList>

      <TabPanels className="!w-full">
        {tabsPanels.map((panels, index) => (
          <TabPanel className="!p-0 !w-full" key={index}>
            {panels}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}
