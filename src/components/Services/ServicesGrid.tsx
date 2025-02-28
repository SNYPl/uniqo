import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SERVICES_DATA } from "@/data/service-data";

const ServicesGrid = () => {
  return (
    <div className="service-section-two srvice">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="heading-box text-center">
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
                We are building great future together Be with us
              </h2>
            </div>
          </div>
        </div>
        <div className="row gutter-y-30">
          {SERVICES_DATA.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div
                className="service-box-two animate fadeInUp wow"
                data-wow-duration="1500ms"
                data-wow-delay={`${index * 400}ms`}
              >
                <div className="service-image-two">
                  <Image
                    src={service.img}
                    alt="service-image"
                    width={500}
                    height={500}
                  />
                  <div className="service-icon-two">
                    <service.IconComponent />
                  </div>
                </div>
                <div className="service-details-two">
                  <h4>
                    <Link href={`/service/${service.id}`}>{service.title}</Link>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
