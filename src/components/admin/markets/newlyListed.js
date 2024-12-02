import React from "react";
import { ChevronRight } from "@mui/icons-material";
import HeadingText from "../../HeadingText";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../api-services/products";

function NewlyListed() {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
    console.log(products);

    return (
      <section className="space-y-4 max-md:container">
        <div className="flex justify-between items-center">
          <HeadingText>Newly Listed</HeadingText>
          <Link
            to="/products"
            className="flex items-center gap-1 font-semibold text-sm text-gray-400 hover:text-black"
          >
            <span>See All</span>
            <ChevronRight fontSize="20" />
          </Link>
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {isLoading
            ? Array.from({ length: 10 }, (_, index) => (
                <ListCardSkeleton key={index} />
              ))
            : products?.map((product) => (
                <ProductListCard
                  key={product.id}
                  id={product.id}
                  image={product.images[0]?.image || "/images/Rectangle5.png"}
                  title={product.title}
                  subtitle={product.category}
                  chatUrl={`/products/${product.id}`}
                />
              ))}
        </div>
      </section>
    );
}

export default NewlyListed;

export const ProductListCard = ({ image, title, subtitle, chatUrl }) => {
  return (
    <div className="rounded-lg overflow-hidden flex items-start flex-col gap-2">
      <img src={image} className="w-full h-[300px]" alt={title || "Product"} />
      <div className="flex sm:flex-col items-start justify-between gap-4 sm:!gap-2 w-full">
        <div className="">
          <h4 className="font-bold text-xl sm:text-lg capitalize line-clamp-1">
            {title}
          </h4>
          <span className="font-semibold text-lg">{subtitle}</span>
        </div>
        <ChatSellerLink to={chatUrl} />
      </div>
    </div>
  );
};

const ListCardSkeleton = () => {
  return (
    <div className="rounded-lg overflow-hidden flex items-start flex-col gap-2 animate-pulse">
      {/* Skeleton for Image */}
      <div className="w-full h-[240px] bg-gray-200 rounded"></div>

      {/* Skeleton for Title and Subtitle */}
      <div className="w-full flex flex-col gap-2 mt-2">
        <div className="h-6 bg-gray-200 rounded w-3/4"></div> {/* Title */}
        <div className="h-4 bg-gray-200 rounded w-1/2"></div> {/* Subtitle */}
      </div>

      {/* Skeleton for Button */}
      <div className="w-1/3 h-10 bg-gray-200 rounded mt-2" />
    </div>
  );
};

export const ChatSellerLink = ({ text, to, id }) => {
  return (
    <Link
      to={to || ""}
      className="shrink-0 flex items-center bg-black py-2 text-white px-3 text-sm rounded-full group w-fit"
      onClick={() => {
        localStorage.setItem("productId", id);
      }}
    >
      <span>{text || "Chat seller"}</span>
      <span className="text-custom_grey ml-1">|</span>
      <ChevronRight className="w-4 transition-all duration-300 -translate-x-1 group-hover:translate-x-1" />
    </Link>
  );
};
