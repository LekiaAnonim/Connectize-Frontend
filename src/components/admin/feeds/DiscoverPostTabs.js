import React, { useEffect, useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import clsx from "clsx";
import {
  Bookmark,
  StarFilledIcon,
  StarOutlinedIcon,
  VerifiedIcon,
} from "../../../icon";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";
import { useMediaQuery } from "react-responsive";
import { ConJoinedImages } from "../../ResponsiveNav";
import { Link } from "react-router-dom";
import HeadingText from "../../HeadingText";

function DiscoverPostTabs() {
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
          <PostSlider />
        </TabPanel>
        <TabPanel className="p-0 !w-full">
          <PostSlider />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default DiscoverPostTabs;

const PostSlider = ({ array }) => {
  const newArray = array || [1, 2, 3, 4, 5, 6];

  const [loading, setLoading] = useState(true);
  const [slidesPerView, setSlidesPerView] = useState(1);

  const isTabletScreen = useMediaQuery({ minWidth: 920 });

  useEffect(() => {
    setLoading(false);
    setSlidesPerView(isTabletScreen ? 2 : 1);
  }, [isTabletScreen, loading]);

  return loading ? (
    <h3>loading...</h3>
  ) : (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={slidesPerView}
      autoplay={{ delay: 40000 }}
      pagination={{ clickable: true }}
      className=""
    >
      {newArray.map((_, index) => (
        <SwiperSlide key={index}>
          <PostCard />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export function PostCard() {
  return (
    <div className="p-3 sm:p-4 rounded-md bg-white">
      <div className="mb-2">
        <HeadingText>Top Services</HeadingText>
      </div>
      <div className="p-2 xs:!p-4 bg-background rounded-md">
        <div className="flex items-start justify-between gap-2 ">
          <h3 className="font-bold">Remote Monitoring and Control</h3>
          <button>
            <Bookmark />
          </button>
        </div>
        <div className="flex mt-2">
          {[1, 2, 3].map((_, index) => (
            <StarFilledIcon key={index} />
          ))}
          {[1, 2].map((_, index) => (
            <StarOutlinedIcon key={index} />
          ))}
        </div>

        <p className="text-gray-500 my-3">
          This is a tweet. It can be long, or short. Depends on what you have to
          say. It can have some hashtags too.
        </p>

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

        <div className="flex items-center justify-between mt-4 py-3 border-t">
          <div className="flex gap-2 items-center">
            <div className="relative">
              <img
                src="/images/bmw.PNG"
                alt="bmw"
                className="rounded-full"
                width={50}
              />
              <VerifiedIcon className="absolute bottom-0 right-0" />
            </div>
            <h4 className="text-sm font-bold">West Land Oil</h4>
          </div>

          <Link to="/" className="bg-gold rounded-full py-2 px-4 text-sm">
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
