import React, { useEffect, useState, useCallback } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import clsx from "clsx";
import {
  Bookmark,
  StarFilledIcon,
  StarOutlinedIcon,
  VerifiedIcon,
} from "../../../icon";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useMediaQuery } from "react-responsive";
import { ConJoinedImages } from "../../ResponsiveNav";
import { Link } from "react-router-dom";
import DiscoverPosts from "./DiscoverPosts";
import { bookmarkService } from "../../../api-services/services";
import { useAuth } from "../../../context/userContext";

const DiscoverPostTabs = () => {
  const tabsStyle = "w-full rounded";
  const selectedStyle = { color: "black", bg: "gray.100" };

  return (
    <Tabs variant="solid-rounded" className="space-y-2">
      <TabList className="rounded-md bg-white p-1 gap-1">
        <Tab className={clsx("", tabsStyle)} _selected={selectedStyle}>
          Markets
        </Tab>
        <Tab className={clsx("", tabsStyle)} _selected={selectedStyle}>
          Services
        </Tab>
      </TabList>

      <TabPanels className="!w-full">
        <TabPanel className="p-0 !w-full">
          <>
            <PostSlider />
            <DiscoverPosts />
          </>
        </TabPanel>
        <TabPanel className="p-0 !w-full">
          <PostSlider />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default DiscoverPostTabs;

export const PostSlider = React.memo(
  ({ array, minWidth = 920, children, customSlidesPerView, delay = 10000 }) => {
    const newArray = array || [1, 2, 3, 4, 5, 6];
    const [loading, setLoading] = useState(true);
    const [slidesPerView, setSlidesPerView] = useState(1);

    const isTabletScreen = useMediaQuery({ minWidth });

    const setUpSlider = useCallback(() => {
      setLoading(false);
      setSlidesPerView(isTabletScreen ? 2 : 1);
    }, [isTabletScreen]);

    useEffect(() => {
      setUpSlider();
    }, [setUpSlider]);

    return loading ? (
      <PostCardSkeleton />
    ) : (
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={customSlidesPerView || slidesPerView}
        autoplay={{ delay }}
        pagination={{ clickable: true }}
        className="z-0"
      >
        {children
          ? children
          : newArray.map((_, index) => (
              <SwiperSlide key={index}>
                <PostCard />
              </SwiperSlide>
            ))}
      </Swiper>
    );
  }
);

export const PostCard = React.memo(
  ({
    isService,
    title,
    summary,
    companyName,
    logo,
    verified,
    url,
    whole = {},
  }) => {
    return (
      <div className="p-4 lg:!px-3 bg-background rounded-md flex flex-col">
        <div className="flex items-start justify-between gap-2 ">
          <h3 className="font-bold capitalize">
            {title || "Remote Monitoring and Control"}
          </h3>
          <BookMarkButton service={whole} />
        </div>
        {!isService && (
          <div className="flex mt-2">
            {[1, 2, 3].map((_, index) => (
              <StarFilledIcon key={index} />
            ))}
            {[1, 2].map((_, index) => (
              <StarOutlinedIcon key={index} />
            ))}
          </div>
        )}

        <p className="text-gray-500 my-3 flex-1">
          {summary ||
            "This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too."}
        </p>

        {!isService && (
          <ConJoinedImages
            size={30}
            array={[
              "/images/passport9.PNG",
              "/images/passport10.PNG",
              "/images/passport11.PNG",
              "/images/passport12.PNG",
              "/images/iconprofile.PNG",
            ]}
          />
        )}

        <div className="flex items-center justify-between mt-4 pt-3 border-t">
          <div className="flex gap-2 items-center">
            <div className="relative">
              <img
                src={logo || "/images/logo.png"}
                alt="bmw"
                className="rounded-full"
                width={50}
              />
              {verified && (
                <VerifiedIcon className="absolute bottom-0 right-0" />
              )}
            </div>
            <h4 className="text-sm font-bold capitalize line-clamp-1">
              {companyName || "West Land Oil"}
            </h4>
          </div>

          <Link
            to={url || ""}
            replace
            className="bg-gold hover:opacity-60 rounded-full py-2 px-4 text-sm"
          >
            View
          </Link>
        </div>
      </div>
    );
  }
);

export const PostCardSkeleton = React.memo(() => (
  <div className="p-3 lg:px-3 rounded-md bg-background flex flex-col animate-pulse">
    <div className="flex items-start justify-between gap-2">
      <div className="w-2/3 h-5 bg-gray-200 rounded-md"></div>
      <div className="w-6 h-6 bg-gray-200 rounded"></div>
    </div>

    <div className="my-4 space-y-3">
      <div className="h-3 bg-gray-200 rounded"></div>
      <div className="h-3 bg-gray-200 rounded w-5/6"></div>
      <div className="h-3 bg-gray-200 rounded w-4/6"></div>
    </div>

    <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-200">
      <div className="flex gap-2 items-center">
        <div className="relative">
          <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
        </div>
        <div className="w-28 h-3 bg-gray-200 rounded"></div>
      </div>

      <div className="bg-gray-200 rounded-full py-2 px-10 h-8"></div>
    </div>
  </div>
));

export const BookMarkButton = React.memo(({ service }) => {
  const { user: currentUser } = useAuth();
  const userHasLikedProduct = service?.likes?.find(
    (product) => product.user.id === currentUser?.id
  );
  const [bookmarked, setBookmarked] = useState(userHasLikedProduct);
  const [loading, setLoading] = useState(false);

  const handleBookmark = useCallback(async () => {
    setLoading(true);
    await bookmarkService(service.id, service);
    setLoading(false);
    setBookmarked((prev) => !prev); // Optimistic update
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookmarked, service]);

  return (
    <button
      className="disabled:cursor-not-allowed"
      disabled={loading}
      onClick={handleBookmark}
    >
      <Bookmark isActive={bookmarked} />
    </button>
  );
});
