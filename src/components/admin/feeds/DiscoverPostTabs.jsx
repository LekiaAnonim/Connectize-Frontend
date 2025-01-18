import React, { useEffect, useState, useCallback } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Avatar,
} from "@chakra-ui/react";
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
import { avatarStyle, ConJoinedImages } from "../../ResponsiveNav";
import { Link } from "react-router-dom";
import { bookmarkService, getServices } from "../../../api-services/services";
import { useAuth } from "../../../context/userContext";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../api-services/products";
import { MarkdownComponent } from "../../MarkDownComponent";
import { motion } from "framer-motion";
import {
  ButtonWithTooltipIcon,
  ConjoinedAvatarSkeleton,
} from "./DiscoverPosts";
import { baseURL } from "../../../lib/helpers";

const DiscoverPostTabs = () => {
  const tabsStyle = "w-full rounded";
  const selectedStyle = { color: "black", bg: "gray.100" };

  const { data: products, isLoading: productsLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const { data: services, isLoading: servicesLoading } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });

  const productsForSlider = products?.map((product) => {
    return {
      isService: false,
      title: product?.title,
      summary: product?.description,
      companyName: product?.company,
      logo: product?.logo,
      verified: product?.featured,
      url: "/products/" + product.id,
      whole: product,
    };
  });

  const servicesForSlider = services?.map((service) => {
    return {
      isService: false,
      title: service?.title,
      summary: service?.description,
      companyName: service?.company,
      logo: service?.logo,
      verified: service?.featured,
      url: "/services/" + service.id,
      whole: service,
    };
  });

  return (
    <Tabs variant="solid-rounded" className="space-y-2">
      <TabList className="rounded-full bg-white p-1 gap-1">
        <Tab className={clsx("", tabsStyle)} _selected={selectedStyle}>
          Products
        </Tab>
        <Tab className={clsx("", tabsStyle)} _selected={selectedStyle}>
          Services
        </Tab>
      </TabList>

      <TabPanels className="!w-full">
        <TabPanel className="!p-0 !w-full">
          <PostSlider
            array={productsForSlider}
            fallback="products"
            arrayLoading={productsLoading}
          />
        </TabPanel>
        <TabPanel className="!p-0 !w-full">
          <PostSlider
            fallback="services"
            array={servicesForSlider}
            arrayLoading={servicesLoading}
          />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default DiscoverPostTabs;

export const PostSlider = ({
  array = [],
  minWidth = 920,
  children,
  customSlidesPerView,
  delay = 10000,
  arrayLoading = false,
  fallback,
}) => {
  const [loading, setLoading] = useState(true);
  const [slidesPerView, setSlidesPerView] = useState(1);

  const isTabletScreen = useMediaQuery({ minWidth });

  const setUpSlider = useCallback(() => {
    setLoading(false);
    setSlidesPerView(isTabletScreen ? 2 : 1);
  }, [isTabletScreen]);

  useEffect(() => setUpSlider(), [setUpSlider]);

  return arrayLoading || loading ? (
    <PostCardSkeleton />
  ) : array.length <= 0 ? (
    <div className="w-full h-20 flex items-center justify-center">
      <p className="text-gray-500 text-sm">
        No {fallback} available at the moment.
      </p>
    </div>
  ) : (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        loop={array.length > 2}
        slidesPerView={
          array.length === 1 ? 1 : customSlidesPerView || slidesPerView
        }
        autoplay={{
          delay,
          pauseOnMouseEnter: true,
          disableOnInteraction: true,
        }}
        pagination={{ clickable: true }}
        className="z-0"
      >
        {children
          ? children
          : array.map((item, index) => (
              <SwiperSlide key={index}>
                <PostCard {...item} />
              </SwiperSlide>
            ))}
      </Swiper>
    </motion.div>
  );
};

export const PostCard = ({
  isService,
  title,
  summary,
  companyName,
  logo,
  verified,
  url,
  whole,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-4 lg:!px-3 bg-white rounded-md flex flex-col h-80"
    >
      <div className="flex items-start justify-between gap-2 ">
        <h3 className="font-bold capitalize text-lg line-clamp-1">
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

      <div className="my-4 line-clamp-3 shrink-0">
        <MarkdownComponent
          markdownContent={
            summary ||
            "This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too."
          }
        />
      </div>

      <div className="h-full" />

      {!isService ||
        (whole?.likes && (
          <ConJoinedImages
            size={30}
            sizeVariant="sm"
            array={whole?.likes.slice(0, 5).map((post) => ({
              name: `${post?.user?.first_name} ${post?.user?.last_name}`,
              src: baseURL + post?.user?.avatar,
              href: `/co/${post?.user?.id}`,
            }))}
          />
        ))}

      <div className="flex items-center justify-between mt-4 pt-3 border-t">
        <div className="flex gap-2 items-center">
          <Link to={`/${companyName}`} className="relative">
            <Avatar
              src={logo || "images/default-company-logo.png"}
              alt={companyName}
              name={companyName}
              className={avatarStyle}
              size="md"
            />
            {verified && <VerifiedIcon className="absolute bottom-0 right-0" />}
          </Link>
          <Link
            to={`/${companyName}`}
            className="text-sm font-bold capitalize line-clamp-1"
          >
            {companyName || "West Land Oil"}
          </Link>
        </div>

        <Link
          to={url || ""}
          replace
          className="bg-gold hover:opacity-60 rounded-full py-2 px-4 text-sm"
        >
          View
        </Link>
      </div>
    </motion.div>
  );
};

export const PostCardSkeleton = React.memo(() => (
  <div className="p-3 lg:px-3 rounded-md bg-white flex flex-col h-80 w-full">
    <div className="flex items-start justify-between gap-2">
      <div className="w-2/3 h-5 rounded-md skeleton" />
      <div className="w-6 h-6 rounded skeleton" />
    </div>

    <div className="my-6 space-y-3 ">
      <div className="h-2.5 skeleton rounded w-4/6" />
      <div className="h-2.5 skeleton rounded w-5/6" />
      <div className="h-2.5 skeleton rounded w-4/6" />
      <div className="h-2.5 skeleton rounded w-5/6" />
    </div>

    <div className="h-full" />

    <ConjoinedAvatarSkeleton />

    <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-200">
      <div className="flex gap-2 items-center">
        <div className="relative">
          <div className="w-12 h-12 skeleton rounded-full" />
        </div>
        <div className="w-28 h-3 skeleton rounded" />
      </div>

      <div className="skeleton rounded-full py-2 px-10 h-8" />
    </div>
  </div>
));

export const BookMarkButton = ({ service }) => {
  const { user: currentUser } = useAuth();
  const userHasLikedProduct = service?.likes?.find(
    (product) => product?.user?.id === currentUser?.id
  );
  const [bookmarked, setBookmarked] = useState(userHasLikedProduct);
  const [loading, setLoading] = useState(false);

  const handleBookmark = async () => {
    if (!service) return;
    setLoading(true);
    await bookmarkService(service.id, service);
    setLoading(false);
    setBookmarked((prev) => !prev);
  };

  return (
    <ButtonWithTooltipIcon
      tip={`Bookmark ${service ? service?.title : "this"}`}
      loading={loading}
      onClick={handleBookmark}
      IconName={bookmarked ? BookmarkFilledIcon : Bookmark}
      iconClassName="!size-8 xs:!size-7"
    />
  );
};
