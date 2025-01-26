import React from "react";
import DiscoverPosts from "../../components/admin/feeds/DiscoverPosts";
import { PostCard } from "../../components/admin/feeds/DiscoverPostTabs";
import { ProductListCard } from "../../components/admin/markets/newlyListed";
import { CompaniesArray } from "../companies";
import CustomTabs from "../../components/custom/tabs";
import { useQuery } from "@tanstack/react-query";
import { getSearchResults } from "../../api-services/search";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Avatar } from "@chakra-ui/react";
import Username from "../../components/Username";
import ConnectButton from "../../components/ConnectButton";
import { avatarStyle } from "../../components/ResponsiveNav";
import LightParagraph from "../../components/ParagraphText";
import useRedirect from "../../hooks/useRedirect";

export default function Search() {
  return (
    <section>
      <SearchTab />
    </section>
  );
}

export const SearchTab = () => {
  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get("search_query");

  useRedirect(!searchQuery, "/");

  const { data, isLoading } = useQuery({
    queryKey: ["search", searchQuery],
    queryFn: () => getSearchResults(searchQuery),
    enabled: !!searchQuery,
  });

  const tabsHeading = ["Posts", "Companies", "People", "Products", "Services"];
  const tabsPanels = [
    <DiscoverPosts
      isSearch
      searchArray={data?.posts}
      searchLoading={isLoading}
    />,
    <CompaniesArray
      hasFilter={false}
      isSearch
      array={data?.companies}
      searchLoading={isLoading}
    />,
    <section className="grid gap-x-3 gap-y-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {data?.users?.length < 1 ? (
        <LightParagraph>No user found in search</LightParagraph>
      ) : (
        data?.users?.map((user) => {
          return (
            <motion.div
              key={user?.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center flex-col gap-6 bg-white rounded-md px-4 py-8"
            >
              <Link to={`/co/${user?.id}`}>
                <Avatar
                  src={user?.avatar}
                  name={`${user?.first_name} ${user?.last_name}`}
                  className={avatarStyle}
                  size="sm"
                  width={50}
                  height={50}
                />
              </Link>
              <div className="flex flex-col items-center text-center">
                <Username user={user} />

                <small className="text-gray-400 line-clamp-2">
                  {user?.email}
                </small>
              </div>

              <div className="">
                <ConnectButton />
              </div>
            </motion.div>
          );
        })
      )}
    </section>,
    <div className="grid gap-x-3 gap-y-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {data?.products?.length < 1 ? (
        <LightParagraph>No product found in search</LightParagraph>
      ) : (
        data?.products?.map((product, index) => (
          <ProductListCard
            key={index}
            chatUrl={`/products/${product?.id}`}
            image={product?.images?.[0]?.image}
            subtitle={product?.sub_title}
            title={product?.title}
          />
        ))
      )}
    </div>,
    <div className="grid gap-x-3 gap-y-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {data?.services?.length < 1 ? (
        <LightParagraph>No service found in search</LightParagraph>
      ) : (
        data?.services?.map((service, index) => (
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
        ))
      )}
    </div>,
  ];

  return <CustomTabs tabsPanels={tabsPanels} tabsHeading={tabsHeading} />;
};
