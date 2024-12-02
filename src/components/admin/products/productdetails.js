import React, { useRef } from "react";
import { ChatSellerLink } from "../markets/newlyListed";
import HeadingText from "../../HeadingText";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  HeartIcon,
} from "@radix-ui/react-icons";
import { Button, Divider } from "@chakra-ui/react";
import { MarkdownComponent } from "../../MarkDownComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const NAVIGATION_BUTTONS = [
  {
    id: 1,
    text: "Back",
    icon: <ChevronLeftIcon direction="left" className="!w-5" />,
    action: "prev",
  },
  {
    id: 2,
    text: "Next",
    icon: <ChevronRightIcon direction="right" className="!w-5" />,
    action: "next",
  },
];

function Productdetails({ product }) {
  const swiperRef = useRef(null);

  const handleNavigation = (action) => {
    const swiperInstance = swiperRef.current;
    console.log(swiperInstance);

    if (!swiperInstance) {
      console.error("Swiper instance is not initialized.");

      return;
    }
    action === "prev" ? swiperInstance.slidePrev() : swiperInstance.slideNext();
  };
  return (
    <>
      <section className="flex max-lg:flex-col items-start justify-center gap-4">
        {product?.images?.length > 0 ? (
          <div className="w-full lg:w-1/2 ">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Pagination, Autoplay]}
              autoplay={20000}
              loop
              slidesPerView={1}
              className="!z-0"
            >
              {product.images.map((image) => (
                <SwiperSlide
                  key={image.id}
                  className="max-h-[400px] rounded-md overflow-hidden"
                >
                  <img
                    src={image.image}
                    className="w-full"
                    alt={product.title || "product"}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex gap-4 items-center justify-between">
              <div className="flex text-xs gap-1 items-center">
                <span>{swiperRef?.current?.activeIndex + 1}</span>
                <span className="text-gray-300">/</span>
                <strong>{product?.images?.length}</strong>
              </div>
              <div className="flex items-center">
                {NAVIGATION_BUTTONS.map((button) => (
                  <Button
                    key={button.id}
                    onClick={() => handleNavigation(button.action)}
                    disabled={product?.images?.length === 1}
                    className="!bg-transparent hover:!text-custom_blue !text-gray-600 first:flex-row-reverse active:scale-95 !text-sm"
                  >
                    <span>{button.text}</span>
                    {button.icon}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <img
            src={"/images/Rectangle3.png"}
            className="w-full lg:w-1/2 shrink-0"
            alt={product.title || "product"}
          />
        )}

        <div className="space-y-4 lg:w-1/2 shrink-0">
          <div className="space-y-2">
            <HeadingText>{product.title}</HeadingText>
            <h5>{product.sub_title}</h5>
          </div>
          <Divider />
          <div className="space-y-2">
            <h6 className="text-xl font-bold">Description</h6>

            <MarkdownComponent
              markdownContent={product.description}
              isDescription
            />
          </div>
          {/* <Divider /> */}

          <div className="flex gap-4 items-center">
            <ChatSellerLink to="/chat" />
            <button className="rounded-full px-4 py-1.5 border !border-black/60 flex items-center justify-center gap-2 text-sm font-bold">
              <HeartIcon />
              <span>Add to favorite</span>
            </button>
          </div>
        </div>
      </section>

      {/* location / Seller information */}
      <section className="gap-4 flex max-lg:flex-col">
        <section className="space-y-4 lg:w-1/2 shrink-0">
          <HeadingText>Location</HeadingText>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.63648087732!2d3.1191397325001287!3d6.548028242383623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1715074059319!5m2!1sen!2sng"
            className="!w-full min-h-[300px]"
            loading="lazy"
            title="Lagos"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>

        <section className="space-y-4 lg:w-1/2 shrink-0">
          <HeadingText>Seller's information</HeadingText>
          <div className="flex items-center gap-3">
            <img src="/images/Ellipsewww.png" className="size-16" alt="#" />
            <div>
              <h5 className="font-bold capitalize">
                {product?.company || "west land energy"}
              </h5>
              <span className="text-gray-400 text-sm">since 15th 2023</span>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Productdetails;
