import React from "react";
import PageBanner from "@/components/PageBanner/PageBanner";
import ServicesGrid from "@/components/Services/ServicesGrid";
import Process from "@/components/Process/Process";
import CTA from "@/components/CTA/CTA";

export default function ServicePage() {
  return (
    <main>
      <PageBanner
        title="Services"
        description="Unleash the power of neuroscience in leadership
            to boost effectiveness and drive lasting resilience in your
            organization. Iterative approaches to collaborative."
        backgroundImage="/assets/images/services/services.jpg"
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Services", link: "/service" },
        ]}
      />
      <ServicesGrid />
      <Process />
      <CTA />
    </main>
  );
}
