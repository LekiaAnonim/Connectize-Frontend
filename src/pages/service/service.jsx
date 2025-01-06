import React, { useEffect } from "react";
import ServiceMain from "../../components/admin/services/serviceMain";

export default function Services() {
  useEffect(() => {
    document.title = "Services on connectize | Services";
  }, []);

  return (
    <main className="min-h-screen">
      <ServiceMain />
    </main>
  );
}
