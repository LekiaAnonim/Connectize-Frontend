import MoreOptions from "../../MoreOptions";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import clsx from "clsx";
import DiscoverPosts from "./DiscoverPosts";
import RecommendedProducts from "../products/recommendedProducts";
import HeadingText from "../../HeadingText";
import LightParagraph from "../../ParagraphText";
import CreatePost from "./CreatePost";
import Reviews from "./reviews";
import { PostCard } from "./DiscoverPostTabs";
import { ProductListCard } from "../markets/newlyListed";

function Summary({ company }) {
  return (
    <section className="space-y-8 w-full md:col-span-2">
      <div className="border-b pb-3">
        <div className="flex pb-3 items-start justify-between">
          <HeadingText>Summary</HeadingText>
          <MoreOptions>
            <div>more options</div>
          </MoreOptions>
        </div>
        <LightParagraph>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatu
        </LightParagraph>
      </div>

      <SummaryTabs company={company} />
    </section>
  );
}

function SummaryTabs({ company }) {
  const tabsStyle = "w-full rounded-full font-medium md:!text-xs lg:!text-sm";
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
            <h1 className="text-2xl font-semibold px-3 py-2">Activities</h1>
            <CreatePost />
            <RecommendedProducts />
            <DiscoverPosts />
          </section>
        </TabPanel>
        <TabPanel className="p-0 !w-full">
          <div className="bg-white rounded-md p-2 grid gap-x-3 gap-y-4">
            {company.services?.map((service, index) => (
              <PostCard
                key={index}
                companyName={service.company}
                verified={service?.companyInfo?.verified}
                logo={service?.companyInfo?.logo}
                title={service.title}
                summary={service.sub_title}
                url={`/services/${service.id}`}
                isService
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel className="p-0 !w-full">
          <div className="p-2 grid gap-x-3 gap-y-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
            {company.products?.map((product, index) => (
              <ProductListCard
                key={index}
                title={product.title}
                subtitle={product.company}
                // image={product.}
                // url={`/products/${product.id}`}
                isSummary
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel className="p-0 !w-full">
          <Reviews />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default Summary;
