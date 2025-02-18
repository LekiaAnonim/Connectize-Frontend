import React, { useCallback, useRef, useState } from "react";
import { baseURL } from "../lib/helpers";
import ReusableModal from "./custom/ResusableModal";
import { NAVIGATION_BUTTONS } from "../lib/slide_button";
import { Button } from "@chakra-ui/react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Logo from "./logo";

const getImageSrc = (src) => (src.startsWith("http") ? src : baseURL + src);

const getImageClassName = (images, index) => {
  if (images.length === 3 && index === 0) return "col-span-2 row-span-2";
  if (images.length === 4 && index > 1) return "aspect-square";
  return "aspect-video";
};

const PostImageCollage = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const swiperRef = useRef(null);

  // Memoized navigation handler
  const handleNavigation = useCallback((action) => {
    const swiperInstance = swiperRef.current;
    if (swiperInstance) {
      action === "prev"
        ? swiperInstance.slidePrev()
        : swiperInstance.slideNext();
      setActiveSlideIndex(swiperInstance.activeIndex);
    }
  }, []);
  if (images.length <= 0) return <></>;

  return (
    <>
      <section
        className={`mt-3 grid gap-2 rounded-lg overflow-hidden ${
          images.length === 1
            ? "grid-cols-1"
            : images.length === 2
            ? "grid-cols-2"
            : "grid-cols-2 md:grid-cols-3"
        }`}
      >
        {images.slice(0, 3).map((src, index) => (
          <PostImage src={src} index={index} key={index} />
        ))}

        {images.length > 3 && (
          <div
            className="relative size-full flex text-white text-lg font-bold rounded-lg cursor-pointer overflow-hidden"
            onClick={() => setIsOpen(true)}
          >
            <span className="z-10 size-full min-h-24 bg-black/40 hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
              +{images.length - 4}
            </span>
            <img
              src={getImageSrc(images[4])}
              className="z-0 absolute rounded-md object-contain"
              alt="open more images"
            />
          </div>
        )}
      </section>
      <ReusableModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        footerContent={
          <div className="flex gap-4 items-center justify-between">
            <div className="flex text-xs gap-1 items-center">
              <strong>
                {activeSlideIndex + 1} / {images.length - 4} image
                {images.length > 1 ? "s" : ""}
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
        }
        title={"Post Image"}
        size="4xl"
      >
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          centeredSlides
          spaceBetween={10}
          className="!z-0"
        >
          {images.slice(3, images.length - 1).map((src, index) => (
            <SwiperSlide
              key={index}
              className="!h-auto rounded-md overflow-hidden"
            >
              <img
                src={getImageSrc(src)}
                className="!size-full block cursor-pointer"
                alt="Images for post"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </ReusableModal>
    </>
  );
};

export default PostImageCollage;

const ImageModal = ({ isOpen, onClose, src }) => {
  return (
    <ReusableModal
      isOpen={isOpen}
      onClose={onClose}
      size="xl"
      title="Post image"
    >
      <img src={src} alt="Post-image" className="size-full rounded-md" />
    </ReusableModal>
  );
};

const PostImage = ({ src, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className={`relative overflow-hidden rounded-lg cursor-pointer ${getImageClassName(
          src,
          index
        )}`}
      >
        <img
          src={getImageSrc(src)}
          alt={`Post-image ${index + 1}`}
          className="size-full object-cover rounded-md"
          onClick={() => setIsOpen(true)}
        />
      </div>

      <ImageModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        src={getImageSrc(src)}
      />
    </>
  );
};
