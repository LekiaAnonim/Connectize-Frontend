import React from "react";
import Heading from "../../components/company/Heading";
import { useQuery } from "@tanstack/react-query";
import { getAllCompanies } from "../../api-services/companies";
import PageLoading from "../../components/PageLoading";
import { Avatar, Button } from "@chakra-ui/react";
import clsx from "clsx";
import { avatarStyle, ConJoinedImages } from "../../components/ResponsiveNav";
import CompanyName from "../../components/company/CompanyName";
import { LocationOnOutlined } from "@mui/icons-material";
import LightParagraph from "../../components/ParagraphText";
import { useCustomSearchParams } from "../../hooks/useCustomSearchParams";
import ConnectButton from "../../components/ConnectButton";

import { motion } from "framer-motion";
import { useAuth } from "../../context/userContext";
import { CompanyUserType } from "../../lib/helpers/types";

const sortOptions = ["company name", "company type", "products", "country"];

export default function CompaniesPage() {
  const { data: companiesList, isLoading } = useQuery({
    queryKey: ["companiesList"],
    queryFn: getAllCompanies,
  });

  const { user: currentUser } = useAuth();

  if (isLoading)
    return <PageLoading hasLogo={false} text="Getting companies" />;

  return (
    <section className="space-y-6">
      <section className="flex items-center justify-between">
        <Heading companyLength={companiesList?.count} />
        {currentUser &&
          currentUser?.companies.length < 1 &&
          currentUser?.user_type === CompanyUserType && (
            <Button
              as="a"
              href="/create-company"
              className="!text-xs !rounded-full hover:!bg-gold transition-colors duration-300"
            >
              Create Company
            </Button>
          )}
      </section>
      <CompaniesArray />
    </section>
  );
}

export const CompaniesArray = ({
  hasFilter = true,
  isSearch,
  array,
  searchLoading,
}) => {
  const { user: currentUser } = useAuth();
  const { data: companiesList } = useQuery({
    queryKey: ["allConnectizeCompanies"],
    queryFn: getAllCompanies,
    enabled: !!currentUser,
  });
  const { updateSearchParams, searchParams } = useCustomSearchParams();

  const selectedSortOption = searchParams.get("sort_by") || "company name";

  const companyArray = isSearch ? array : companiesList?.results;

  const sortedCompanies = companyArray?.sort((a, b) => {
    switch (selectedSortOption) {
      case "company type":
        return a.organization_type.localeCompare(b.organization_type);
      case "products":
        return a.products.length - b?.products.length;
      case "country":
        return a?.country.localeCompare(b?.country);
      default:
        return a.company_name.localeCompare(b?.company_name);
    }
  });
  return searchLoading ? (
    <PageLoading hasLogo={false} text="Getting companies" />
  ) : companyArray?.length < 1 ? (
    <LightParagraph>No company found in search</LightParagraph>
  ) : (
    <section className="space-y-4">
      {companyArray && hasFilter && (
        <section className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="font-semibold">Sort By</h2>

          <div className="flex overflow-x-auto scrollbar-hidden scroll-smooth">
            {sortOptions?.map((option, index) => {
              const currentOption = selectedSortOption.toLowerCase() === option;
              return (
                <Button
                  key={index}
                  onClick={() => updateSearchParams({ sort_by: option })}
                  className={clsx(
                    "!text-xs xs:!py-2 xs:!h-fit capitalize transition-all duration-300 !rounded-full shrink-0 scrollbar-hidden",
                    {
                      "!bg-gold": currentOption,
                      "!bg-transparent": !currentOption,
                    }
                  )}
                >
                  By {option}
                </Button>
              );
            })}
          </div>
        </section>
      )}

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {sortedCompanies?.map((company, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              key={index}
              className={clsx("p-2 rounded-md h-72 flex flex-col", {
                "bg-white": !isSearch,
                "bg-background": isSearch,
              })}
            >
              <div className="flex gap-2 items-center">
                <Avatar
                  className={avatarStyle}
                  size="xl"
                  src={company?.logo || "/images/default-company-logo.png"}
                  name={company?.company_name}
                />

                <div>
                  <CompanyName
                    name={company?.company_name}
                    verified={company?.verify}
                    size="md"
                  />
                  {company?.organization_type && (
                    <div className="flex mb-1">
                      <span className="!line-clamp-1 xs:text-sm sm:text-xs">
                        {company?.organization_type}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center text-gray-400">
                    <LocationOnOutlined className="sm:!size-4 !size-5" />
                    <span className="text-sm sm:text-xs">
                      {company?.address} {company?.city}, {company?.state},{" "}
                      {company?.country}.
                    </span>
                  </div>
                </div>
              </div>

              <div className="line-clamp-3 p-2 shrink-0">
                <LightParagraph>{company?.about} </LightParagraph>
              </div>

              <div className="h-full" />

              <div className="py-4 border-t mt-4 flex items-center justify-between">
                {company?.reviews ? (
                  <ConJoinedImages
                    size={30}
                    sizeVariant="sm"
                    array={company?.reviews.slice(0, 5).map((post) => ({
                      name: `${post?.user?.first_name} ${post?.user?.last_name}`,
                      src: post?.user?.avatar,
                      href: `/co/${post?.user?.id}`,
                    }))}
                  />
                ) : (
                  <div />
                )}
                {currentUser?.email !== company?.profile && (
                  <ConnectButton
                    first_name={company?.company_name}
                    id={company?.id}
                    type="company"
                  />
                )}
              </div>
            </motion.div>
          );
        })}
      </section>
    </section>
  );
};
