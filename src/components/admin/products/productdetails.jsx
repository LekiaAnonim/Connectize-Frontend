import React, { useRef, useState, useCallback } from "react";
import { ChatSellerLink } from "../markets/newlyListed";
import HeadingText from "../../HeadingText";
import {
  BookmarkFilledIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import { Button, Divider } from "@chakra-ui/react";
import { MarkdownComponent } from "../../MarkDownComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useAuth } from "../../../context/userContext";
import { bookmarkProduct } from "../../../api-services/products";
import { Bookmark } from "../../../icon";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  getCompanies,
  getSingleCompany,
} from "../../../api-services/companies";

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
  const { user: currentUser } = useAuth();
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const { data: company } = useQuery({
    queryKey: ["companies", product?.company],
    queryFn: () => getSingleCompany(product?.company),
    enabled: !!product?.company,
  });

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

  // Determine if the current user has liked the product
  const userHasLikedProduct = product?.likes?.some(
    (like) => like.user.id === currentUser?.id
  );

  return (
    <>
      <section className="flex max-lg:flex-col items-start justify-center gap-4">
        {product?.images?.length > 0 ? (
          <div className="w-full lg:w-1/2">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Pagination, Autoplay]}
              autoplay={{ delay: 10000 }}
              pagination={{ clickable: true }}
              slidesPerView={1}
              className="!z-0"
            >
              {product.images.map((image) => (
                <SwiperSlide
                  key={image.id}
                  className="max-h-[300px] md:max-h-[350px] rounded-md overflow-hidden relative group"
                >
                  <img
                    src={image?.image}
                    className="size-full"
                    alt={image?.caption || product?.title || "product"}
                  />
                  <div className="w-full absolute bottom-0 px-4 py-2 xs:opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-white max-xs:hidden">
                    <small>{image?.caption}</small>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {product?.images?.length > 1 && (
              <div className="flex gap-4 items-center justify-between">
                <div className="flex text-xs gap-1 items-center">
                  <span>{activeSlideIndex + 1}</span>
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
            )}
          </div>
        ) : (
          <img
            src={"/public/images/produc_drum.jpeg"}
            className="w-full md:w-1/2 max-h-[300px] shrink-0"
            alt={product?.title || "product"}
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
              markdownTitle="Product description"
              isDescription
            />
          </div>
          <div className="flex gap-4 items-center">
            <ChatSellerLink to="/chat" />
            <FavoriteButton
              userHasLikedProduct={userHasLikedProduct}
              product={product}
            />
          </div>
        </div>
      </section>

      <section className="gap-4 flex max-lg:flex-col">
        <section className="space-y-4 lg:w-1/2 shrink-0">
          <HeadingText>Location</HeadingText>
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            className="!w-full min-h-[300px]"
            loading="lazy"
            title="Lagos"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>

        <section className="space-y-4 lg:w-1/2 shrink-0">
          <HeadingText>Seller's information</HeadingText>
          <div className="flex items-center gap-3">
            <img
              src={company?.logo || "/images/default-company-logo.png"}
              className="size-16"
              alt={product?.company}
            />
            <div className="flex flex-col">
              <Link
                to={`/${product?.company}`}
                className="font-bold capitalize"
              >
                {product?.company || ""}
              </Link>
              <span className="text-gray-400 text-sm">
                since {company?.registration_date}
              </span>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

function FavoriteButton({ userHasLikedProduct, product }) {
  const [favorited, setFavorited] = useState(userHasLikedProduct);
  const [loading, setLoading] = useState(false);

  const handleBookmark = async () => {
    setLoading(true);
    await bookmarkProduct(product.id, product);
    setFavorited((prev) => !prev); // Optimistic UI update
    setLoading(false);
  };

  return (
    <button
      className="rounded-full px-4 py-1.5 border !border-black/40 flex items-center justify-center gap-1 text-sm font-semibold disabled:cursor-not-allowed"
      onClick={handleBookmark}
      disabled={loading}
    >
      {favorited ? <BookmarkFilledIcon className="size-6" /> : <Bookmark />}
      <span>Bookmark Product</span>
    </button>
  );
}

export default Productdetails;
