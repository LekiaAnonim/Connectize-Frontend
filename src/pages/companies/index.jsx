import React, { useState } from "react";
import Heading from "../../components/company/Heading";
import { useQuery } from "@tanstack/react-query";
import { getAllCompanies } from "../../api-services/companies";
import PageLoading from "../../components/PageLoading";
import { Avatar, Badge, Button } from "@chakra-ui/react";
import clsx from "clsx";
import { avatarStyle } from "../../components/ResponsiveNav";
import CompanyName from "../../components/company/CompanyName";
import { LocationOnOutlined } from "@mui/icons-material";
import LightParagraph from "../../components/ParagraphText";
import { useSearchParams } from "react-router-dom";
import { useCustomSearchParams } from "../../hooks/useCustomSearchParams";
import ConnectButton from "../../components/ConnectButton";

const sortOptions = ["name", "companies", "products", "location"];

export default function CompaniesPage() {
  const [searchParams] = useSearchParams();
  const { updateSearchParams } = useCustomSearchParams();

  const selectedSortOption = searchParams.get("sort_by") || "name";
  // const currentPage = Number(searchParams.get("page")) || 1;
  const { data: companiesList, isLoading } = useQuery({
    queryKey: ["companiesList"],
    queryFn: getAllCompanies,
  });

  if (isLoading)
    return <PageLoading hasLogo={false} text="Getting companies" />;

  const sortedCompanies = companiesList?.results.sort((a, b) => {
    switch (selectedSortOption) {
      case "companies":
        return a.organization_type.localeCompare(b.organization_type);
      case "products":
        return a.products.length - b?.products.length;
      case "location":
        return a?.country.localeCompare(b?.country);
      default:
        return a.company_name.localeCompare(b?.company_name);
    }
  });

  return (
    <section className="space-y-4">
      <Heading companyLength={companiesList?.count} />

      <section className="space-y-4">
        <section className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="font-semibold">Sort By</h2>

          <div className="flex overflow-x-auto">
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

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {sortedCompanies?.map((company) => {
            return (
              <div className="bg-white p-2 rounded-md">
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
                    />
                    {company?.organization_type && (
                      <div className="flex mb-1">
                        <Badge>{company?.organization_type} </Badge>
                      </div>
                    )}
                    <div className="flex items-center text-gray-400">
                      <LocationOnOutlined />
                      <span className="text-sm xs:text-xs">
                        {company?.address} {company?.city}, {company?.state},{" "}
                        {company?.country}.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="line-clamp-3 p-2">
                  <LightParagraph>{company?.about} </LightParagraph>
                </div>

                <div className="py-4 border-t mt-4 flex items-center justify-between">
                  <div className=""></div>
                  <ConnectButton />
                </div>
              </div>
            );
          })}
        </section>
      </section>
    </section>
  );
}
