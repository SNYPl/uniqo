import React from 'react';
import Script from 'next/script';
import PageBanner from '@/components/PageBanner/PageBanner';
import AboutBanner from '@/components/About/AboutBanner';
import About from '@/components/About/About';
import WhyChooseSkills from '@/components/WhyChoose/WhyChooseSkills';
import CTA from '@/components/CTA/CTA';
import Team from '@/components/Team/Team';

export default function AboutPage() {
  return (
    <>
      <main>
        <PageBanner 
          title="About Us" 
          description="Leverage agile frameworks to provide a robust synopsis for high level overviews."
          breadcrumb={[
            { label: "Home", link: "/" },
            { label: "About us", link: "/about" }
          ]} 
        />
        <AboutBanner />
        <About />
        <WhyChooseSkills />
        <CTA />
        <Team />
      </main>

      {/* Additional scripts needed for about page */}
      <Script src="/assets/vendors/jquery-circleType/jquery.circleType.js" strategy="lazyOnload" />
      <Script src="/assets/vendors/jquery-lettering/jquery.lettering.min.js" strategy="lazyOnload" />
      <Script src="/assets/vendors/circleGraph/jquery.circleGraph.js" strategy="lazyOnload" />
      <Script src="/assets/vendors/youtube-popup/youtube-popup.jquery.js" strategy="lazyOnload" />
      <Script src="/assets/vendors/odometer/odometer.min.js" strategy="lazyOnload" />
      
    </>
  );
} 