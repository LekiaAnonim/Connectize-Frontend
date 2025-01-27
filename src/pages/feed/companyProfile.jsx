import React, { useEffect, useMemo } from "react";
import Reviews from "../../components/admin/feeds/reviews";
import { SuggestionList } from "../../components/admin/feeds/TopServiceSuggestions";
import Summary from "../../components/admin/feeds/summary";
import ListedProducts from "../../components/admin/products/listedProducts";
import Header from "../../components/userProfile/header";
import { Link, useParams } from "react-router-dom";
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

const CompanyProfile = React.memo(() => {
  const { company: companyName } = useParams();

  const { data: company, isLoading } = useQuery({
    queryKey: ["companies", companyName],
    queryFn: () => getSingleCompany(companyName),
    enabled: !!companyName,
  });

  useEffect(() => {
    document.title = `${company?.company_name || ""} | Companies in Connectize`;
  }, [company?.company_name]);

  const headerProps = useMemo(
    () => ({
      banner: company?.banner || "",
      name: company?.company_name || "",
      logo: company?.logo || "images/default-company-logo.png",
    }),
    [company]
  );

  if (isLoading) return <PageLoading hasLogo={false} />;

  if (!company) return <NoPage />;

  return (
    <section className="rounded-md overflow-hidden w-full">
      <Header {...headerProps} />

      <section className="mt-11 md:mt-14 flex max-lg:flex-col items-start gap-2 relative">
        <Link
          to="/representatives/manage"
          className="bg-gold hover:bg-opacity-70 text-sm xs:text-xs lg:text-sm font-semibold absolute right-0 -top-9 md:-top-12 py-1.5 px-2 rounded-full"
        >
          Manage Representatives
        </Link>
        <ProductSidebar company={company} />
        <section className="grid grid-cols-1 gap-2 max-lg:py-2">
          <Summary company={company} />
        </section>
      </section>
    </section>
  );
});

const ProductSidebar = React.memo(({ company }) => {
  const stats = useMemo(
    () => [
      formatNumber(company?.products?.length || 0) + "/ products",
      formatNumber(company?.followers?.length || 0) + "/ followers",
      formatNumber(company?.following?.length || 0) + "/ following",
      formatNumber(company?.reviews?.length || 0) + "/ Reviews",
    ],
    [company]
  );

  return (
    <section className="space-y-8 max-lg:mb-4 w-full lg:max-w-[350px] xl:max-w-[400px] shrink-0">
      <section className="space-y-6">
        <h1 className="text-3xl md:text-2xl font-bold">
          {capitalizeFirst(company?.company_name)}
        </h1>
        <div className="flex gap-2 overflow-x-auto scrollbar-hidden">
          {stats.map((text, index) => (
            <StatsText key={index} text={text} />
          ))}
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
      <ProfileSection title="People Associated" className="h-fit">
        <SuggestionList hasSeeMore />
      </ProfileSection>
      <ListedProducts company={company} />
      <Reviews reviews={company?.reviews} />
    </section>
  );
});

export const StatsText = React.memo(({ text }) => {
  const [mainText, subText] = text.split("/");
  return (
    <div className="bg-gray-200/80 py-2 px-3 rounded-full md:text-xs text-sm shrink-0">
      <span className="text-black font-semibold">{mainText}</span>
      <span className="text-gray-500">{subText}</span>
    </div>
  );
});

export default CompanyProfile;
