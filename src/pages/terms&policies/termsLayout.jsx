import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../components/logo";

export default function TermsLayout() {
  return (
    <main className="md:space-y-4">
      <header className="container max-w-screen-lg max-md:py-2">
        <Logo />
      </header>
      <section className="container max-w-screen-lg p-6 bg-white rounded-lg flex">
        <Outlet />
      </section>
    </main>
  );
}
