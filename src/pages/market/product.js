import React, { useEffect } from "react";
import Productdetails from "../../components/admin/products/productdetails";
import NewProducts from "../../components/admin/products/newProducts";
import { useParams } from "react-router-dom";
import { getProducts } from "../../api-services/products";
import { useQuery } from "@tanstack/react-query";
import { useCustomQuery } from "../../context/queryContext";

export default function Product() {
  const { id: productId } = useParams();
    const { setRefetchInterval } = useCustomQuery();

  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    setRefetchInterval,
  });

  const product =
    products?.find((item) => item.id.toString() === productId) || null;

  useEffect(() => {
    document.title = `${product?.title || ""} | Products - Connectize`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // if (!product) return <Navigate to="/market" />;
  return (
    <div className="space-y-12 max-md:container">
      {isLoading ? <div>loading</div> : <Productdetails product={product} />}
      <NewProducts />
    </div>
  );
}
