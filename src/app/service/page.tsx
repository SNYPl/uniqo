import React from 'react';
import PageBanner from '@/components/PageBanner/PageBanner';
import ServicesGrid from '@/components/Services/ServicesGrid';
import Process from '@/components/Process/Process';
import CTA from '@/components/CTA/CTA';

export default function ServicePage() {
  return (
    <main>
      <PageBanner 
        title="Services" 
        description="Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to collaborative."
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Services", link: "/service" }
        ]} 
        backgroundImage="/assets/images/background/service-page-bg.jpg"
      />
      <ServicesGrid />
      <Process />
      <CTA />
    </main>
  );
} 