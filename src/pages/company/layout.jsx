import React from "react";
import { Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCompanies } from "../../api-services/companies";
import LightParagraph from "../../components/ParagraphText";

const CompanyLayout = () => {
  const { data: companies = [] } = useQuery({
    queryKey: ["companies"],
    queryFn: () => getCompanies(),
  });

  return (
    <main className="container mx-auto max-w-screen-md max-xs:space-y-4">
      <section className="min-h-[90vh] mb-8 w-full max-w-screen-md flex items-center justify-center">
        {companies.length >= 1 ? (
          <LightParagraph center>
            You have reached the maximum number of companies per company for
            your subscription
          </LightParagraph>
        ) : (
          <Outlet />
        )}
      </section>
    </main>
  );
};

export default CompanyLayout;
