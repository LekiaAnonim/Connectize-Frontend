import React from "react";
import { Link } from "react-router-dom";
import HeadingText from "../../HeadingText";
import { PostSlider } from "../feeds/DiscoverPostTabs";
import { SwiperSlide } from "swiper/react";
import {ChatSellerLink} from "./newlyListed"

function Carousel() {
  return (
    <section className="space-y-4 max-md:container">
      <div className="mx-auto flex items-center justify-center gap-1 bg-tabs p-1 w-fit rounded-full">
        <button className="bg-white rounded-full px-4 py-1">market</button>
        <Link
          to="/service"
          className="text-decoration-none text-black px-4 py-1"
        >
          services
        </Link>
      </div>

      <section className="space-y-4">
        <HeadingText>Recommended</HeadingText>
        <PostSlider>
          {[
            { src: "/images/Rectangle1.png", title: "", productUrl: "" },
            { src: "/images/Rectangle2.png", title: "", productUrl: "" },
            { src: "/images/Rectangle3.png", title: "", productUrl: "" },
            { src: "/images/Rectangle4.png", title: "", productUrl: "" },
            { src: "/images/Rectangle5.png", title: "", productUrl: "" },
          ].map(({ src }, index) => (
            <SwiperSlide key={index}>
              <Card img={src} />
            </SwiperSlide>
          ))}
        </PostSlider>
      </section>
    </section>
  );
}

export const Card = ({ img, productUrl, title }) => {
  return (
    <div className="relative overflow-hidden rounded-lg">
      <img
        src={img}
        className="w-full h-[300px] scale-105"
        alt={title || "Product"}
      />
      <div className="absolute top-2 left-3 bg-custom_grey/70 rounded-full size-5 border-2" />
      <div className="text-white flex items-center justify-between absolute left-0 bottom-0 pl-4 pr-1 pb-4 pt-8 gap-2 bg-gradient-to-t from-black/60 to-transparent w-full">
        <h3 className="max-w-[60%]">Efficiency Unlashed: Mid-Tier Blend</h3>
        <ChatSellerLink text="Visit store" to={productUrl} />
      </div>
    </div>
  );
};

export default Carousel;
