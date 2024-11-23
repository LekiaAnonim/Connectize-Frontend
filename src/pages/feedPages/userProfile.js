import React from "react";
import Reviews from "../../components/admin/feeds/reviews";
import Summary from "../../components/admin/feeds/summary";
// import Company from "../../components/admin/feeds/company";
import { Suggestions } from "../../components/admin/feeds/TopServiceSuggestions";
import DiscoverFeed from "../../components/admin/feeds/DiscoverFeed";
import Header from "../../components/profile/userProfile/navBar";
import ListedProducts from "../../components/admin/products/listedProducts";

export default function UserProfile() {
  return (
    <main className="bg-background">
      <Header />
      <section className="mt-20 container">
        <div className="">

          <ListedProducts />

          <Reviews />
        </div>
        <section className="w-full grid grid-cols-1 xl:grid-cols-3 gap-3 py-2">
          <div>
            <Summary />
            <DiscoverFeed />
          </div>
          <Suggestions />
        </section>
      </section>
    </main>
  );
}
