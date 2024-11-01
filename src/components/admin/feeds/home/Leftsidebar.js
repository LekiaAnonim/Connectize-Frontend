import * as React from "react";

import "./LeftSideBar.css";
import VerticalTab from "./Verticaltab";
import CompanyListCard from "./CompanyListCard";

export function LeftSideBar() {
  return (
    <section className="left-sidebar-container mt-5">
      <div className="mt-2">
        <img src="images/logo.png" alt="logo" />
      </div>
      <VerticalTab />
      <div className="left-sidebar-companies">
        <h3>Companies</h3>
        <CompanyListCard />
        <CompanyListCard />
        <CompanyListCard />
        <CompanyListCard />
        <CompanyListCard />
      </div>
    </section>
  );
}
