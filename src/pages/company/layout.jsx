import React from "react";
import { Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCompanies } from "../../api-services/companies";
import LightParagraph from "../../components/ParagraphText";
import { useAuth } from "../../context/userContext";
import { UserType } from "../../lib/helpers/types";
import Restricted from "../../components/Restricted";

const CompanyLayout = () => {
  const { user: currentUser } = useAuth();

  // useRedirect(currentUser?.user_type === UserType, `/co/${currentUser?.id}`);

  const { data: companies = [] } = useQuery({
    queryKey: ["companies"],
    queryFn: () => getCompanies(),
    enabled: !!currentUser,
  });

  return (
    <main className="container mx-auto max-w-screen-md max-xs:space-y-4">
      <section className="min-h-[90vh] mb-8 w-full max-w-screen-md flex items-center justify-center">
        {currentUser?.user_type === UserType ? (
          <Restricted fallback="company" />
        ) : companies.length >= 1 ? (
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
