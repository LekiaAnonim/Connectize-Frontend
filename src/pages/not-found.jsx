import React from "react";
import NoPage from "../components/NoPage";
import Navbar from "../components/userProfile/Navbar";
import clsx from "clsx";
import Sidebar from "../components/admin/markets/sidebar";

export default function NotFound() {
  return (
    <main className={clsx("bg-background")}>
      <Navbar />
      <section className="max-md:container flex flex-col items-start md:flex-row p-3 gap-4 xl:!gap-5">
        <Sidebar />
        <div className="grid grid-cols-1 md:px-0 gap-2 w-full">
          <NoPage />
        </div>
      </section>
    </main>
  );
}
