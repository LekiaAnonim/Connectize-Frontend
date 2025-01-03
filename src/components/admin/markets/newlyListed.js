import React, { useMemo } from "react";
import { ChevronRight } from "@mui/icons-material";
import { Link, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../api-services/products";
import clsx from "clsx";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

function NewlyListed() {
  const [searchParams] = useSearchParams();
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const productCategory = searchParams.get("category") || "";

  // Memoize filtered and sliced products
  const filteredProducts = useMemo(
    () =>
      productCategory
        ? products.filter(
            (product) =>
              product.category.toLowerCase() === productCategory.toLowerCase()
          )
        : products,
    [productCategory, products]
  );

  const newlyListedProducts = useMemo(() => products.slice(0, 6), [products]);

  const tabs = useMemo(
    () => [
      { label: "All Products", products: filteredProducts },
      { label: "Newly Listed", products: newlyListedProducts },
    ],
    [filteredProducts, newlyListedProducts]
  );

  const tabsStyle = "w-full rounded";
  const selectedStyle = { color: "black", bg: "gray.100" };

  return (
    <Tabs variant="solid-rounded" className="space-y-2">
      <TabList className="rounded-md bg-white p-1 gap-1">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            className={clsx("", tabsStyle)}
            _selected={selectedStyle}
          >
            {tab.label}
          </Tab>
        ))}
      </TabList>

      <TabPanels className="!w-full">
        {tabs.map((tab, index) => (
          <TabPanel key={index} className="p-0 !w-full">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
              {isLoading
                ? Array.from({ length: 6 }, (_, index) => (
                    <ListCardSkeleton key={index} />
                  ))
                : tab.products.map((product) => (
                    <ProductListCard
                      key={product.id}
                      id={product.id}
                      image={
                        product.images[0]?.image || "/images/Rectangle5.png"
                      }
                      title={product.title}
                      subtitle={product.category}
                      chatUrl={`/products/${product.id}`}
                    />
                  ))}
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}

export default NewlyListed;

export const ProductListCard = ({
  image,
  title,
  subtitle,
  chatUrl,
  isSummary = false,
}) => (
  <div
    className={clsx(
      "rounded-lg overflow-hidden flex items-start flex-col gap-2",
      {
        "bg-white p-2": isSummary,
      }
    )}
  >
    <img
      src={image || "/images/Rectangle5.png"}
      className={clsx("w-full h-[300px] rounded-lg", {
        "md:h-[200px]": isSummary,
      })}
      alt={title || "Product"}
    />
    <div className="flex sm:flex-col items-start justify-between gap-4 sm:!gap-2 w-full">
      <div>
        <h4 className="font-bold text-xl sm:text-lg capitalize line-clamp-1">
          {title}
        </h4>
        <span className="font-semibold text-base">{subtitle}</span>
      </div>
      {!isSummary && <ChatSellerLink to={chatUrl} />}
    </div>
  </div>
);

export const ListCardSkeleton = () => (
  <div className="rounded-lg overflow-hidden flex items-start flex-col gap-2 animate-pulse">
    <div className="w-full h-[240px] bg-gray-200 rounded"></div>
    <div className="w-full flex flex-col gap-2 mt-2">
      <div className="h-6 bg-gray-200 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
    <div className="w-1/3 h-10 bg-gray-200 rounded mt-2" />
  </div>
);

export const ChatSellerLink = ({ text = "Chat seller", to, id }) => (
  <Link
    to={to || ""}
    className="shrink-0 flex items-center bg-black py-2 text-white px-3 text-sm rounded-full group w-fit"
    onClick={() => localStorage.setItem("productId", id)}
  >
    <span>{text}</span>
    <span className="text-custom_grey ml-1">|</span>
    <ChevronRight className="w-4 transition-all duration-300 -translate-x-1 group-hover:translate-x-1" />
  </Link>
);
