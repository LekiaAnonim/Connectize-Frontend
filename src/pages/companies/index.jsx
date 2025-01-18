import React, { useState } from "react";
import Heading from "../../components/company/Heading";
import { useQuery } from "@tanstack/react-query";
import { getAllCompanies } from "../../api-services/companies";
import PageLoading from "../../components/PageLoading";
import { Button } from "@chakra-ui/react";
import clsx from "clsx";

const sortOptions = ["name", "companies", "products", "location"];

export default function CompaniesPage() {
  const [selectedSortOption, setSelectedSortOption] = useState("name");
  const { data: companies, isLoading } = useQuery({
    queryKey: ["companiesList"],
    queryFn: getAllCompanies,
  });

  if (isLoading)
    return <PageLoading hasLogo={false} text="Getting companies" />;

  return (
    <section className="space-y-4">
      <Heading companyLength={companies?.length} />

      <section className="">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="font-semibold">Sort By</h2>

          <div className="flex overflow-x-auto">
            {sortOptions.map((option, index) => {
              const currentOption = selectedSortOption === option;
              return (
                <Button
                  key={index}
                  onClick={() => setSelectedSortOption(option)}
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
        </div>
      </section>
    </section>
  );
}
