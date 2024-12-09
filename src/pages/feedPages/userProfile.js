import React, { useEffect } from "react";
import Reviews from "../../components/admin/feeds/reviews";
import { Suggestions } from "../../components/admin/feeds/TopServiceSuggestions";
import Summary from "../../components/admin/feeds/summary";
import ListedProducts from "../../components/admin/products/listedProducts";
import Header from "../../components/userProfile/header";
import Navbar from "../../components/userProfile/Navbar";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCompanies } from "../../api-services/companies";
import { capitalizeFirst, formatNumber } from "../../lib/utils";
import NoPage from "../../components/NoPage";

export default function UserProfile() {
  const { company: companyName } = useParams();

  const { data: companies } = useQuery({
    queryKey: ["companies"],
    queryFn: getCompanies,
  });

  const company =
    companies?.find(
      (item) =>
        item.company_name.toLowerCase().replaceAll(" ", "_") === companyName
    ) || null;

  useEffect(() => {
    document.title = `${company?.company_name || ""} | Companies - Connectize`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!company) return <NoPage />;
  return (
    <>
      <Navbar isUserProfile />
      <main className="bg-background">
        <Header company={company} />

        <section className="mt-16 max-md:container flex flex-col items-start md:flex-row p-3 gap-2">
          <ProductSidebar company={company} />
          <section className="grid grid-cols-1 xl:grid-cols-3 md:px-2 xl:px-4 gap-2 py-2">
            <Summary company={company} />
            <div className="md:sticky top-2 md:max-h-screen md:overflow-y-auto scrollbar-hidden">
              <Suggestions />
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

function ProductSidebar({ company }) {
  return (
    <section className="space-y-8 max-md:mb-4 w-full md:max-w-[350px] shrink-0 md:sticky top-2 md:h-screen md:overflow-y-auto scrollbar-hidden">
      <section className="space-y-5 px-2">
        <h1 className="text-3xl md:text-2xl font-bold">
          {capitalizeFirst(company.company_name) || "Dangote oil refinery"}
        </h1>
        <div className="flex gap-2 overflow-x-auto">
          <StatsText
            text={formatNumber(company.products.length) + "/ products"}
          />
          <StatsText
            text={formatNumber(company.followers.length) + "/ followers"}
          />
          <StatsText
            text={formatNumber(company.following.length) + "/ following"}
          />
          <StatsText text={"0/ Reviews"} />
        </div>
      </section>
      <ListedProducts company={company} />
      <Reviews />
    </section>
  );
}

function StatsText({ text }) {
  return (
    <div className="bg-gray-200/80 py-2 px-3 rounded-full md:text-xs text-sm shrink-0">
      <span className="text-black font-semibold">{text.split("/")[0]}</span>
      <span className="text-gray-500">{text.split("/")[1]}</span>
    </div>
  );
}
