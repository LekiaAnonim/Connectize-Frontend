import React, { useEffect } from "react";
import { useAuth } from "../../context/userContext";
import Reviews from "../../components/admin/feeds/reviews";
import { Suggestions } from "../../components/admin/feeds/TopServiceSuggestions";
import DiscoverFeed from "../../components/admin/feeds/DiscoverFeed";
import ListedProducts from "../../components/admin/products/listedProducts";
import Header from "../../components/userProfile/header";

export default function UserProfile() {
  const { user } = useAuth();

  useEffect(() => {
    document.title = `${user?.first_name} ${user?.last_name} | User Profile - Connectize`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main className="bg-background">
      <Header />

      <section className="mt-16 max-md:container flex flex-col items-start md:flex-row p-3 gap-2">
        <ProductSidebar />
        <section className="grid grid-cols-1 xl:grid-cols-3 md:px-2 xl:px-4 gap-2 py-2">
          <DiscoverFeed isUserProfile />
          <Suggestions />
        </section>
      </section>
    </main>
  );
}

function ProductSidebar() {
  return (
    <section className="space-y-8 max-md:mb-4 w-full md:max-w-[360px] shrink-0">
      <section className="space-y-5 px-2">
        <h1 className="text-3xl md:text-2xl font-bold">Dangote oil refinery</h1>
        <div className="flex gap-2">
          <StatsText text="25k/ post" />
          <StatsText text="1M/ followers" />
          <StatsText text="157/ Reviews" />
        </div>
      </section>
      <ListedProducts />
      <Reviews />
    </section>
  );
}

function StatsText({ text }) {
  return (
    <div className="bg-gray-200/80 py-2 px-3 rounded-full md:text-xs text-sm">
      <span className="text-black font-semibold">{text.split("/")[0]}</span>
      <span className="text-gray-500">{text.split("/")[1]}</span>
    </div>
  );
}
