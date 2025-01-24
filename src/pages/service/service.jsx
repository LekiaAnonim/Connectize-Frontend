import React, { useEffect } from "react";
import ServiceMain from "../../components/admin/services/serviceMain";
import { CreateNewLink } from "../../components/admin/markets/carousel";

export default function Services() {
  useEffect(() => {
    document.title = "Services on connectize | Services";
  }, []);

  return (
    <main className="min-h-screen">
      <ServiceMain />
      <CreateNewLink url="add" text="Add new service" />
    </main>
  );
}
