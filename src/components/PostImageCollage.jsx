import React from "react";
import { baseURL } from "../lib/helpers";

const PostImageCollage = ({ images }) => {
  if (images.length === 0) return null;

  return (
    <section
      className={`mt-3 grid gap-2 rounded-lg overflow-hidden ${
        images.length === 1
          ? "grid-cols-1"
          : images.length === 2
          ? "grid-cols-2"
          : "grid-cols-2 md:grid-cols-3"
      }`}
    >
      {images.slice(0, 4).map((src, index) => (
        <div
          key={index}
          className={`relative overflow-hidden rounded-lg ${
            images.length === 3 && index === 0
              ? "col-span-2 row-span-2"
              : images.length === 4 && index > 1
              ? "aspect-square"
              : "aspect-video"
          }`}
        >
          <img
            src={src.startsWith("http") ? src : baseURL + src}
            alt={`Post-image ${index + 1}`}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      ))}

      {images.length > 4 && (
        <div className="relative flex items-center justify-center bg-black/50 text-white text-lg font-bold rounded-lg">
          +{images.length - 4}
        </div>
      )}
    </section>
  );
};

export default PostImageCollage;


/**
 * 
 * 
 * 
 * <section className="space-y-2 md:space-y-5 mt-4">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            slidesPerView={Math.min(images.length, 3)}
            centeredSlides={images.length < 3}
            spaceBetween={10}
            className="!z-0"
          >
            {images.map((src, index) => (
              <SwiperSlide
                key={index}
                className="h-auto max-h-[450px] md:max-h-[500px] rounded-md overflow-hidden"
              >
                <PostImage
                  src={src.startsWith("http") ? src : baseURL + src}
                  className="w-full h-full object-cover aspect-[4/3] md:aspect-[16/9] rounded-md"
                  key={index}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {images.length > 3 && (
            <div className="flex gap-4 items-center justify-between">
              <div className="flex text-xs gap-1 items-center">
                <strong>
                  {images.length} image{images.length > 1 ? "s" : ""}
                </strong>
              </div>
              <div className="flex items-center">
                {NAVIGATION_BUTTONS.map((button) => (
                  <Button
                    key={button.id}
                    onClick={() => handleNavigation(button.action)}
                    disabled={images.length === 1}
                    className="!bg-transparent hover:!text-custom_blue !text-gray-600 first:flex-row-reverse active:scale-95 !text-sm xs:!text-xs"
                  >
                    <span>{button.text}</span>
                    {button.icon}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </section>
 */