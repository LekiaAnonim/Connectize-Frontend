import { useQuery } from "@tanstack/react-query";
import { bookmarkProduct, getProducts } from "../../api-services/products";
import PageLoading from "../PageLoading";
import { useEffect, useState } from "react";
import LightParagraph from "../ParagraphText";
import { Link } from "react-router-dom";
import { ChatSellerLink } from "../admin/markets/newlyListed";
import { motion } from "framer-motion";
import { LinkWithTooltipIcon } from "../userProfile/Navbar";
import { ButtonWithTooltipIcon } from "../admin/feeds/DiscoverPosts";
import { Link1Icon, Share1Icon, TrashIcon } from "@radix-ui/react-icons";
import { shareThis } from "../../lib/utils";
import { useAuth } from "../../context/userContext";

export const BookmarkedProducts = () => {
  const { user: currentUser } = useAuth();
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    enabled: !!currentUser,
  });

  const bookmarkedProducts = products?.filter((product) =>
    product?.likes?.find((like) => like?.user?.id === currentUser?.id)
  );

  const [cachedProducts, setCachedProducts] = useState(
    bookmarkedProducts || []
  );

  useEffect(() => {
    setCachedProducts(bookmarkedProducts);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!!bookmarkedProducts]);

  if (isLoading) return <PageLoading hasLogo={false} />;

  return (
    <section className="space-y-4">
      {cachedProducts?.length <= 0 ? (
        <div className="p-4 text-center">
          <LightParagraph>No bookmarked product yet</LightParagraph>
        </div>
      ) : (
        cachedProducts?.map((product) => (
          <BookmarkedProductsCard
            setCachedProducts={setCachedProducts}
            cachedProducts={cachedProducts}
            product={product}
            key={product?.id}
          />
        ))
      )}
    </section>
  );
};

const BookmarkedProductsCard = ({
  product,
  setCachedProducts,
  cachedProducts,
}) => {
  const { user: currentUser } = useAuth();
  const hasBookmarked = product?.likes?.some(
    (like) => like.user.id === currentUser?.id
  );

  const handleBookmark = async () => {
    await bookmarkProduct(product.id, product, hasBookmarked);

    setCachedProducts(
      cachedProducts?.filter((cacheProduct) => cacheProduct.id !== product?.id)
    );
  };
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="flex justify-between max-sm:flex-col relative"
    >
      <div className="flex gap-2">
        <img
          src={product?.images?.[0]?.image || "/images/produc_drum.jpeg"}
          alt={product?.images?.[0]?.caption || ""}
          className="size-20 sm:size-24 rounded-md overflow-hidden shrink-0"
        />

        <div className="flex flex-col justify-between">
          <div className="">
            <Link
              to={`/products/${product?.id}`}
              className="!line-clamp-1 !break-all text-lg md:text-xl font-semibold"
            >
              {product?.title}
            </Link>
            <small className="w-fit text-gray-400 mb-2  !line-clamp-1 !break-all block leading-none">
              {product?.category}
            </small>
          </div>
          <ChatSellerLink text="Chat seller" to={`/messages/${product?.id}`} />
        </div>
      </div>

      <div className="flex items-center justify-end gap-2 max-sm:absolute bottom-3 right-0">
        <ButtonWithTooltipIcon
          tip={`Remove ${product?.title} from bookmark`}
          IconName={TrashIcon}
          onClick={handleBookmark}
        />
        <LinkWithTooltipIcon
          IconName={Link1Icon}
          to={`/products/${product?.id}`}
        />
        <ButtonWithTooltipIcon
          tip={`Share ${product?.title}`}
          onClick={async () => {
            const shareUrlString =
              window.location.href + "products/" + product?.id;
            const shareData = {
              title: product?.title,
              text: product?.sub_title,
              url: shareUrlString,
            };
            await shareThis({ shareUrlString, shareData });
          }}
          IconName={Share1Icon}
        />
      </div>
    </motion.section>
  );
};
