import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getProducts } from "../../../api-services/products";
import HeadingText from "../../HeadingText";
import { ProductListCard } from "../markets/newlyListed";
import { PostSlider } from "../feeds/DiscoverPostTabs";
import { SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";

export default function NewProducts() {
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const isDesktopScreen = useMediaQuery({ minWidth: "1400px" });
  const isLaptopScreen = useMediaQuery({ minWidth: "1028px" });
  const isBigMobile = useMediaQuery({ minWidth: "640px" });

  return (
    <section className="space-y-4 mb-6 ">
      <HeadingText>You may also like</HeadingText>
      <section className="">
        <PostSlider
          array={products?.slice(0, 4)}
          customSlidesPerView={
            isDesktopScreen ? 4 : isLaptopScreen ? 3 : isBigMobile ? 2 : 1
          }
        >
          {products?.slice(0, 4).map((product, index) => {
            return (
              <SwiperSlide key={product?.id}>
                <ProductListCard
                  image={product?.images[index]?.image}
                  title={product?.title}
                  subtitle={product?.category}
                  companyName={product?.company}
                  id={product?.id}
                />
              </SwiperSlide>
            );
          })}
        </PostSlider>
      </section>
    </section>
  );
}
