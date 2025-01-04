import React, { useEffect } from "react";
import Productdetails from "../../components/admin/products/productdetails";
import NewProducts from "../../components/admin/products/newProducts";
import { useParams } from "react-router-dom";
import { getProducts } from "../../api-services/products";
import { useQuery } from "@tanstack/react-query";
import { useCustomQuery } from "../../context/queryContext";

export default function Product() {
  const { id: productId } = useParams();
  const { refetchInterval } = useCustomQuery();

  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    refetchInterval,
  });

  const product =
    products?.find((item) => item.id.toString() === productId) || null;

  useEffect(() => {
    if (product?.title) {
      document.title = `${product.title} | Products - Connectize`;
    }
  }, [product]);

  if (isLoading) return <ProductDetailSkeleton />;

  return (
    <div className="space-y-12 max-md:container">
      {product ? (
        <Productdetails product={product} />
      ) : (
        <div>Product not found</div>
      )}
      <NewProducts />
    </div>
  );
}

export const ProductDetailSkeleton = () => {
  return (
    <>
      <section className="flex max-lg:flex-col items-start justify-center gap-4">
        {/* Image Skeleton */}
        <div className="w-full lg:w-1/2">
          <div className="w-full h-[350px] bg-gray-200 animate-pulse rounded-md"></div>
          {/* Navigation Buttons Skeleton */}
          <div className="flex gap-4 items-center justify-between mt-4 w-full">
            <div className="flex text-xs gap-1 items-center">
              <div className="h-6 w-12 bg-gray-200 rounded animate-pulse"></div>
              <div className="text-gray-300">/</div>
              <div className="h-6 w-12 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="flex items-center gap-2">
              {Array.from({ length: 2 }).map((_, index) => (
                <button
                  key={index}
                  disabled
                  className="!bg-transparent hover:!text-custom_blue !text-gray-600 first:flex-row-reverse active:scale-95 !text-sm"
                >
                  <div className="h-6 w-16 bg-gray-200 rounded animate-pulse"></div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Details Skeleton */}
        <div className="space-y-4 lg:w-1/2 shrink-0">
          <div className="space-y-2 w-full">
            <div className="h-8 w-1/2 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-6 w-1/3 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="h-[1px] bg-gray-300 my-4 animate-pulse"></div>
          <div className="space-y-2">
            <div className="text-xl font-bold h-6 w-1/3 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-36 w-full bg-gray-200 animate-pulse rounded"></div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="w-32 h-10 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="w-16 h-10 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      <section className="gap-4 flex max-lg:flex-col">
        <section className="space-y-4 lg:w-1/2 shrink-0">
          <div className="h-6 w-1/3 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-full h-[300px] bg-gray-200 animate-pulse rounded"></div>
        </section>

        <section className="space-y-4 lg:w-1/2 shrink-0">
          <div className="h-6 w-1/3 bg-gray-200 rounded animate-pulse"></div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
            <div>
              <div className="h-6 w-24 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-16 bg-gray-200 rounded animate-pulse mt-2"></div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
