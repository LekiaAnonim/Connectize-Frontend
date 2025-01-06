import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import clsx from "clsx";
import { PostCard, PostCardSkeleton } from "../feeds/DiscoverPostTabs";
import { getServices } from "../../../api-services/services";
import { useQuery } from "@tanstack/react-query";

function ServiceMain({ isOverview }) {
  const tabsStyle =
    "rounded-full font-medium lg:!text-base xs:!text-sm !text-xs";
  const selectedStyle = { color: "black", bg: "#F1C644" };
  return (
    <Tabs
      variant="solid-rounded"
      className={clsx("space-y-4", {
        "max-lg:!hidden w-full": isOverview,
      })}
    >
      <TabList className="gap-2 sm:gap-4 bg-white rounded-full !p-2">
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
        <TabPanel className="!p-0 !w-full">
          <PostCardWrapper isOverview={isOverview} />
        </TabPanel>
        <TabPanel className="!p-0 !w-full">
          <PostCardWrapper isOverview={isOverview} />
        </TabPanel>
        <TabPanel className="!p-0 !w-full">
          <PostCardWrapper isOverview={isOverview} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default ServiceMain;

export const PostCardWrapper = ({ postArray, isOverview = false }) => {
  const { data: services, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });

  return (
    <section
      className={clsx("bg-white rounded-md p-2 grid gap-x-3 gap-y-4 ", {
        "sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3":
          !isOverview,
        // "max-lg:hidden": isOverview,
      })}
    >
      {isLoading
        ? Array.from({ length: 6 }, (_, index) => (
            <PostCardSkeleton key={index} />
          ))
        : services?.map((service, index) => (
            <PostCard
              key={index}
              companyName={service.company}
              verified={service?.companyInfo?.verified}
              logo={service?.companyInfo?.logo}
              title={service.title}
              summary={service.sub_title}
              url={`/services/${service.id}`}
              whole={service}
              isService
            />
          ))}
    </section>
  );
};
