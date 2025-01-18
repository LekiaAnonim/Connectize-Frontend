import React, { memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import HeadingText from "../../HeadingText";
import { PostSlider } from "../feeds/DiscoverPostTabs";
import { SwiperSlide } from "swiper/react";
import { ChatSellerLink, ListCardSkeleton } from "./newlyListed";
import { useQuery } from "@tanstack/react-query";
import { getRecommendedProducts } from "../../../api-services/products";

// Memoize Card component to avoid unnecessary re-renders
const Card = memo(({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-lg"
    >
      <img
        src={product.images[0]?.image || ""}
        className="w-full h-[300px] scale-105"
        alt={product.images[0]?.caption || "Product"}
      />
      <div className="absolute top-2 left-3 bg-custom_grey/70 rounded-full size-5 border-2" />
      <div className="text-white flex items-center justify-between absolute left-0 bottom-0 pl-4 pr-1 pb-4 pt-8 gap-2 bg-gradient-to-t from-black/70 to-transparent w-full">
        <h3 className="max-w-[60%]">
          {product?.title || "Efficiency Unlashed: Mid-Tier Blend"}
        </h3>
        <ChatSellerLink text="Visit store" to={`/products/${product?.id}`} />
      </div>
    </motion.div>
  );
});

function Carousel() {
  const navigate = useNavigate();
  const {
    data: recommendedProducts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["recommendedProducts"],
    queryFn: getRecommendedProducts,
    enabled: true, // Ensure the query is enabled by default
  });

  // Early return in case of loading or error
  if (isLoading) return <ListCardSkeleton />;
  if (isError) return <div>Error loading products.</div>;

  return (
    <section className="space-y-4 max-md:container">
      <div className="mx-auto flex items-center justify-center gap-1 bg-tabs p-1 w-fit rounded-full">
        <button className="bg-white rounded-full px-4 py-1">market</button>
        <button
          onClick={() => navigate("/services")}
          className="text-decoration-none text-black px-4 py-1"
        >
          services
        </button>
      </div>

      <section className="space-y-4">
        <HeadingText>Recommended</HeadingText>
        <PostSlider array={recommendedProducts}  >
          {recommendedProducts?.map((product) => (
            <SwiperSlide key={product.id}>
              <Card product={product} />
            </SwiperSlide>
          ))}
        </PostSlider>
      </section>
    </section>
  );
}

export default Carousel;
