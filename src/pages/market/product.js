import React, { useEffect } from "react";
import Productdetails from "../../components/admin/products/productdetails";
import NewProducts from "../../components/admin/products/newProducts";
import { Navigate, useParams } from "react-router-dom";
import { getProducts } from "../../api-services/products";
import { useQuery } from "@tanstack/react-query";

export default function Product() {
  const { id: productId } = useParams();

  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const product =
    products?.find((item) => item.id.toString() === productId) || null;

  useEffect(() => {
    document.title = `${product?.title || ""} | Products - Connectize`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!product) return <Navigate to="/market" />;
  return (
    <div className="space-y-12 max-md:container">
      <Productdetails product={product} />
      <NewProducts />
    </div>
  );
}

//  <main className="bg-background">
//    <Header />

//    <section className="mt-16 max-md:container flex flex-col items-start md:flex-row p-3 gap-2">
//      <ProductSidebar />
//      <section className="grid grid-cols-1 xl:grid-cols-3 md:px-2 xl:px-4 gap-2 py-2">
//        <DiscoverFeed isUserProfile />
//        <Suggestions />
//      </section>
//    </section>
//  </main>;
