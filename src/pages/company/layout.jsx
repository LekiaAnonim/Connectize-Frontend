import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../components/logo";
import { useQuery } from "@tanstack/react-query";
import { getCompanies } from "../../api-services/companies";

const CompanyLayout = () => {
  const { data: companies = [] } = useQuery({
    queryKey: ["companies"],
    queryFn: ()=> getCompanies(),
  });

  return (
    <main className="container mx-auto max-w-screen-md max-xs:space-y-4">
      <nav className="w-full py-2">
        <header className="">
          <Logo /> {/* url="/create-company" */}
        </header>
      </nav>
      <section className="min-h-[90vh] mb-8 w-full max-w-screen-md flex items-center justify-center">
        {companies.length >= 4 ? (
          <p>You have reached the maximum number of companies per company</p>
        ) : (
          <Outlet />
        )}
      </section>
    </main>
  );
};

export default CompanyLayout;
