import React from 'react';
import PageBanner from '@/components/PageBanner/PageBanner';
import ServiceDetails from '@/components/ServiceDetails/ServiceDetails';
import CTA from '@/components/CTA/CTA';

export default function ServiceDetailsPage() {
  return (
    <main>
      <PageBanner 
        title="Service Details" 
        description="Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to collaborative."
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Services", link: "/service" },
          { label: "Service Details", link: "/service-details" }
        ]} 
        backgroundImage="/assets/images/background/service-page-bg.jpg"
      />
      <ServiceDetails />
      <CTA />
    </main>
  );
} 