import React, { useEffect } from "react";
import Carousel from "../../components/admin/markets/carousel";
import NewlyListed from "../../components/admin/markets/newlyListed";

export default function Market() {
  useEffect(() => {
    document.title = `Marketplace - Connectize`;
  }, []);
  return (
    <section className="space-y-16 w-full bg-background">
      <Carousel />
      <NewlyListed />
    </section>
  );
}
