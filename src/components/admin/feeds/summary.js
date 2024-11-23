import MoreHorizoneIcon from '@mui/icons-material/MoreHoriz'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import clsx from "clsx";
import DiscoverPosts from "./DiscoverPosts";
import RecommendedProducts from "../products/recommendedProducts";
import HeadingText from "../../HeadingText";
import LightParagraph from "../../ParagraphText";
import CreatePost from "./CreatePost";

function Summary() {
  return (
    <section className="space-y-8">
      <div className="border-b pb-3">
        <div className="flex pb-3 items-start justify-between">
          <HeadingText>Summary</HeadingText>
          <button>
            <MoreHorizoneIcon />
          </button>
        </div>
        <LightParagraph>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatu
        </LightParagraph>
      </div>

      <SummaryTabs />
    </section>
  );
}

function SummaryTabs() {
  const tabsStyle = "w-full rounded-full font-medium";
  const selectedStyle = { color: "black", bg: "#F1C644" };
  return (
    <Tabs variant="solid-rounded" className="space-y-4">
      <TabList className="gap-1 px-2">
        <Tab className={clsx("", tabsStyle)} _selected={selectedStyle}>
          Markets
        </Tab>
        <Tab className={clsx("", tabsStyle)} _selected={selectedStyle}>
          Services
        </Tab>
        <Tab className={clsx("", tabsStyle)} _selected={selectedStyle}>
          Products
        </Tab>
        <Tab className={clsx("", tabsStyle)} _selected={selectedStyle}>
          Reviews
        </Tab>
      </TabList>

      <TabPanels className="!w-full">
        <TabPanel className="p-0 !w-full">
          <section className="space-y-6">
            <h1 className="text-3xl font-semibold py-3">Activities</h1>
            <CreatePost />
            <RecommendedProducts />
            <DiscoverPosts />
          </section>
        </TabPanel>
        <TabPanel className="p-0 !w-full">
          <div>Services tab</div>
        </TabPanel>
        <TabPanel className="p-0 !w-full">
          <div>Products tab</div>
        </TabPanel>
        <TabPanel className="p-0 !w-full">
          <div>Reviews tab</div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default Summary