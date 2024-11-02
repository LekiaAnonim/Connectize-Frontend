import * as React from "react";

import "./RightSideBar.css";
import TopServiceCard from "./TopServiceCard";
import SuggestedUserCard from "./SuggestUser";

export default function RightSideBar() {
  return (
    <section className="right-sidebar-container mt-5">
      <TopServiceCard />
      <div className="right-sidebar-suggested-container">
        <h3>Suggested</h3>
        <SuggestedUserCard />
        <SuggestedUserCard />
        <SuggestedUserCard />
        <SuggestedUserCard />
        <SuggestedUserCard />
        <SuggestedUserCard />
        <SuggestedUserCard />
      </div>
    </section>
  );
}
