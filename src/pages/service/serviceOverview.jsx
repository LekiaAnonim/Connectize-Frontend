import React from 'react'
// import ServiceMain from "../../components/admin/services/serviceMain";
import OverviewDetails from "../../components/admin/services/overviewDetails";

export default function ServiceOverView() {
  return (
    <section className="grid lg:grid-cols-3 gap-3">
      {/* <ServiceMain isOverview /> */}
      <OverviewDetails />
    </section>
  );
}
