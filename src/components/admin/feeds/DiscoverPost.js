import React, { useEffect, useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import clsx from "clsx";
import { Bookmark } from "../../../icon";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";
import { useMediaQuery } from "react-responsive";

function DiscoverPost() {
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
          <Posts />
        </TabPanel>
        <TabPanel className="p-0 !w-full">
          <Posts />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default DiscoverPost;

const Posts = ({ array }) => {
  const newArray = array || [1, 2, 3, 4, 5, 6];

  const [loading, setLoading] = useState(true);
  const [slidesPerView, setSlidesPerView] = useState(1);

  const isTabletScreen = useMediaQuery({ minWidth: 763 });

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
          <div className="border p-3 sm:p-4 rounded-md bg-white">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-bold">Remote Monitoring and Control</h3>
              <button>
                <Bookmark />
              </button>
            </div>
            <div>
              {[1, 2, 3].map((_, index) => (
                <StarFilledIcon />
              ))}
            </div>
            <p className="text-gray-500 mb-2">
              This is a tweet. It can be long, or short. Depends on what you
              have to say. It can have some hashtags too.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">West Land Oil</span>
              <button className="text-blue-500">View</button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
