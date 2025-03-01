import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SERVICES_DATA } from "@/data/service-data";
import PageBanner from "../PageBanner/PageBanner";
interface ServiceDetailsProps {
  serviceId: string;
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ serviceId }) => {
  const service = SERVICES_DATA.find((s) => s.id === serviceId);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <>
      <PageBanner
        title={service.title}
        description={service.shortDescription}
        backgroundImage="/assets/images/services/services.jpg"
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Services", link: "/service" },
        ]}
      />
      <div className="service-details-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-details-left">
                <div
                  className="service-details-image animate fadeInUp wow"
                  data-wow-duration="1500ms"
                >
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={800}
                    height={500}
                  />
                </div>
                <div
                  className="service-details-content animate fadeInUp wow"
                  data-wow-duration="1500ms"
                  data-wow-delay="200ms"
                >
                  <h3>{service.title}</h3>
                  <p className="lead">{service.content.description}</p>

                  <div className="service-details-box">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="service-details-box-image">
                          <Image
                            src={service.img}
                            alt={service.title}
                            width={400}
                            height={300}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="service-details-box-content">
                          <h4>Key Features</h4>
                          <ul>
                            {service.content.features.map((feature, index) => (
                              <li key={index}>
                                <i className="fa-solid fa-check"></i>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p>{service.content.additionalContent}</p>

                  <div className="service-details-list">
                    <h4>Benefits</h4>
                    <div className="row">
                      <div className="col-lg-6">
                        <ul>
                          {service.content.benefits
                            .slice(
                              0,
                              Math.ceil(service.content.benefits.length / 2)
                            )
                            .map((benefit, index) => (
                              <li key={index}>
                                <i className="fa-solid fa-check"></i>
                                {benefit}
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <ul>
                          {service.content.benefits
                            .slice(
                              Math.ceil(service.content.benefits.length / 2)
                            )
                            .map((benefit, index) => (
                              <li key={index}>
                                <i className="fa-solid fa-check"></i>
                                {benefit}
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-details-sidebar">
                <div
                  className="service-details-widget animate fadeInRight wow"
                  data-wow-duration="1500ms"
                >
                  <h4>All Services</h4>
                  <ul>
                    {SERVICES_DATA.map((s) => (
                      <li key={s.id}>
                        <Link href={`/service/${s.id}`}>
                          <p>{s.title}</p>
                          <Image
                            src="/assets/images/services/service-details-arrow-right.svg"
                            alt="icon"
                            width={20}
                            height={20}
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="service-details-cta-widget animate fadeInRight wow"
                  data-wow-duration="1500ms"
                  data-wow-delay="400ms"
                >
                  <Image
                    src="/assets/images/logo.png"
                    alt="icon"
                    width={150}
                    height={50}
                  />
                  <h5>Need Help? We Are Here To Help You</h5>
                  <Link href="/contact" className="btn btn-primary btn-theme">
                    Contact Us +
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
