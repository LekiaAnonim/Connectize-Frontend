import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getProducts } from "../../../api-services/products";
import HeadingText from "../../HeadingText";
import { ProductListCard } from "../markets/newlyListed";

export default function NewProducts() {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  let ProductCard = ({ image, gold, reserved }) => {
    return (
      <div>
        <img src={image} className="w-100" alt="#" />
        <p>
          {gold} <br /> {reserved}
        </p>
      </div>
    );
  };
  return (
    <section className="space-y-4">
      <HeadingText>You may also like</HeadingText>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {products.splice(0, 4).map((product) => (
          <ProductListCard
            key={product.id}
            image={"/images/Rectangle7.png"}
            title={product.title}
            subtitle={product.category}
          />
        ))}
      </div>
    </section>
  );
}
