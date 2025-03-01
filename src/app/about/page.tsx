import React from "react";
import Script from "next/script";
import PageBanner from "@/components/PageBanner/PageBanner";
import OurMission from "@/components/About/OurMission";
import WhyChooseSkills from "@/components/WhyChoose/WhyChooseSkills";

export default function AboutPage() {
  return (
    <>
      <main>
        <PageBanner
          title="About Us"
          description="Unleash the power of neuroscience in leadership
            to boost effectiveness and drive lasting resilience in your
            organization."
          backgroundImage="/assets/images/about/about.jpg"
          breadcrumb={[
            { label: "Home", link: "/" },
            { label: "About us", link: "/about" },
          ]}
        />
        <OurMission />
        <WhyChooseSkills />
      </main>

      {/* Additional scripts needed for about page */}
      <Script
        src="/assets/vendors/jquery-circleType/jquery.circleType.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/vendors/jquery-lettering/jquery.lettering.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/vendors/circleGraph/jquery.circleGraph.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/vendors/youtube-popup/youtube-popup.jquery.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/vendors/odometer/odometer.min.js"
        strategy="lazyOnload"
      />
    </>
  );
}
