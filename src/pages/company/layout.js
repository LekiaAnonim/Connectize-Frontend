import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../components/logo";

const CompanyLayout = () => {
  return (
    <main className="container mx-auto max-w-screen-md max-xs:space-y-4">
      <nav className="w-full py-2">
        <header className="">
          <Logo /> {/* url="/create-company" */}
        </header>
      </nav>
      <section className="min-h-[90vh] mb-8 w-full max-w-screen-md flex items-center justify-center">
        <Outlet />
      </section>
    </main>
  );
};

export default CompanyLayout;
