import MoreOptions from "../../MoreOptions";
import DiscoverPosts from "./DiscoverPosts";
import RecommendedProducts from "../products/recommendedProducts";
import HeadingText from "../../HeadingText";
import LightParagraph from "../../ParagraphText";
import CreatePost from "./CreatePost";
import Reviews from "./reviews";
import { PostCard } from "./DiscoverPostTabs";
import { ProductListCard } from "../markets/newlyListed";
import CustomTabs from "../../custom/tabs";

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
  const tabsHeading = ["Activities", "Services", "Products", "Reviews"];

  const tabsPanels = [
    <section className="space-y-6">
      {/* <div className="space-y-3">
              <h1 className="text-2xl font-semibold p-1">Activities</h1>
            </div> */}
      <CreatePost />
      <RecommendedProducts />
      <DiscoverPosts />
    </section>,
    <div className="grid gap-x-3 gap-y-4">
      {company?.services?.map((service, index) => (
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
    <div className="p-2 grid gap-x-3 gap-y-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
      {company?.products?.map((product, index) => (
        <ProductListCard
          key={index}
          title={product.title}
          subtitle={product.company}
          // image={product.}
          // url={`/products/${product.id}`}
          isSummary
        />
      ))}
    </div>,
    <Reviews />,
  ];

  return <CustomTabs tabsHeading={tabsHeading} tabsPanels={tabsPanels} />;
}

export default Summary;
