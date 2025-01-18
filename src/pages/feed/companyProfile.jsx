import React, { useEffect } from "react";
import Reviews from "../../components/admin/feeds/reviews";
import {
  SuggestionList,
  Suggestions,
} from "../../components/admin/feeds/TopServiceSuggestions";
import Summary from "../../components/admin/feeds/summary";
import ListedProducts from "../../components/admin/products/listedProducts";
import Header from "../../components/userProfile/header";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSingleCompany } from "../../api-services/companies";
import { capitalizeFirst, formatNumber } from "../../lib/utils";
import NoPage from "../../components/NoPage";
import PageLoading from "../../components/PageLoading";
import ProfileSection from "../../components/userProfile/profile-section";
import { ProfileAboutList } from "./userProfile";
import LightParagraph from "../../components/ParagraphText";
import { LocationOnOutlined } from "@mui/icons-material";
import { GlobeIcon, Link1Icon } from "@radix-ui/react-icons";
import { MailOutlined } from "@ant-design/icons";

export default function CompanyProfile() {
  const { company: companyName } = useParams();

  const { data: company, isLoading } = useQuery({
    queryKey: ["companies", companyName],
    queryFn: () => getSingleCompany(companyName),
    enabled: !!companyName,
  });

  useEffect(() => {
    document.title = `${company?.company_name || ""} | Companies in Connectize`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <PageLoading hasLogo={false} />;

  if (!company) return <NoPage />;

  const headerProps = {
    banner: company?.banner || "",
    name: company?.company_name || "",
    logo: company?.logo || "images/default-company-logo.png",
  };

  return (
    <section className="rounded-md overflow-hidden w-full">
      <Header {...headerProps} />

      <section className="mt-10 max-md:container flex max-lg:flex-col items-start gap-2">
        <ProductSidebar company={company} />
        <section className="grid grid-cols-1 gap-2 max-lg:py-2">
          <Summary company={company} />
        </section>
      </section>
    </section>
  );
}

function ProductSidebar({ company }) {
  return (
    <section className="space-y-8 max-lg:mb-4 w-full lg:max-w-[350px] xl:max-w-[400px] shrink-0">
      <section className="space-y-6 max-lg:px-2">
        <h1 className="text-3xl md:text-2xl font-bold">
          {capitalizeFirst(company?.company_name)}
        </h1>
        <div className="flex gap-2 overflow-x-auto scrollbar-hidden">
          <StatsText
            text={formatNumber(company?.products?.length || 0) + "/ products"}
          />
          <StatsText
            text={formatNumber(company?.followers?.length || 0) + "/ followers"}
          />
          <StatsText
            text={formatNumber(company?.following?.length || 0) + "/ following"}
          />
          <StatsText
            text={formatNumber(company?.reviews?.length || 0) + "/ Reviews"}
          />
        </div>
      </section>
      <ProfileSection title="About">
        <LightParagraph>{company?.about}</LightParagraph>
        <ul className="space-y-4 divide-y">
          <ProfileAboutList
            Icon={LocationOnOutlined}
            title="Location"
            value={`${company?.office_address || "No office address"} ${
              company?.city || ""
            }, ${company?.state || ""}. ${company?.country || ""}`}
          />
          <ProfileAboutList
            Icon={GlobeIcon}
            title="Website"
            value={company?.website || "No website added"}
          />
          <ProfileAboutList
            Icon={MailOutlined}
            title="Email"
            value={company?.email || "No Email"}
          />
          <ProfileAboutList
            Icon={Link1Icon}
            title="Links"
            value={company?.email || "No Links"}
          />
        </ul>
      </ProfileSection>
      <ProfileSection title="People Associated" className="h-fit lg:w-1/3">
        <SuggestionList hasSeeMore />
      </ProfileSection>
      <ListedProducts company={company} />
      <Reviews reviews={company?.reviews} />
    </section>
  );
}

export function StatsText({ text }) {
  return (
    <div className="bg-gray-200/80 py-2 px-3 rounded-full md:text-xs text-sm shrink-0">
      <span className="text-black font-semibold">{text.split("/")[0]}</span>
      <span className="text-gray-500">{text.split("/")[1]}</span>
    </div>
  );
}
