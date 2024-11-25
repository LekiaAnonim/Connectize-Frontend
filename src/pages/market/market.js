import React, { useEffect } from "react";
import Carousel from "../../components/admin/markets/carousel";
import NewlyListed from "../../components/admin/markets/newlyListed";

export default function Market() {
  useEffect(() => {
    document.title = `Market - Connectize`;
  }, []);
  return (
    <section className="space-y-8 w-full">
      <Carousel />
      <NewlyListed />
    </section>
  );
}
