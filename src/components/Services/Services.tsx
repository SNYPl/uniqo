import React from "react";
import Link from "next/link";
import ServiceBox from "./ServiceBox";
import { SERVICES_DATA } from "@/data/service-data";

const ServicesHeader = () => (
  <div className="service-left-one">
    <div className="heading-box">
      <span
        className="sub-title animate fadeInUp wow"
        data-wow-duration="1500ms"
      >
        Services
      </span>
      <h2
        className="heading-title animate fadeInUp wow"
        data-wow-duration="1500ms"
        data-wow-delay="200ms"
      >
        We Always Provide Best Business Services to Our Customers
      </h2>
      <div
        className="service-left-details-one animate fadeInUp wow"
        data-wow-duration="1500ms"
        data-wow-delay="400ms"
      >
        <p className="lead">
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative approaches to collaborative.
        </p>
        <Link href="/service" className="btn btn-secondary btn-theme">
          More Services +
        </Link>
      </div>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="service-section-one">
      <div className="container">
        <div className="row gutter-y-30 justify-content-between">
          <div className="col-lg-4">
            <ServicesHeader />
          </div>
          <div className="col-xl-8 col-lg-8">
            <div className="service-right-one">
              <div className="service-right-inner-one">
                {SERVICES_DATA.slice(0, 2).map((service, index) => (
                  <ServiceBox key={index} {...service} />
                ))}
              </div>
              <div className="service-right-inner-one">
                {SERVICES_DATA.slice(2, 4).map((service, index) => (
                  <ServiceBox key={index + 2} {...service} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
