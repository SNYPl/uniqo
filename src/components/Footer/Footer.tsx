import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SERVICES_DATA } from "@/data/service-data";

const Footer = () => {
  return (
    <div className="main-footer">
      {/* footer one start */}
      <footer className="footer-one">
        <div className="container-fluid">
          <div className="row gutter-y-30">
            <div className="col-xl-2">
              <div
                className="footer-about-one animate fadeInRight wow"
                data-wow-duration="1500ms"
              >
                <div className="footer-logo-one">
                  <Image
                    src="/assets/images/footer-logo.png"
                    alt="logo"
                    width={250}
                    height={50}
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 col-md-9">
              <div
                className="footer-widget-one animate fadeInRight wow"
                data-wow-duration="1500ms"
                data-wow-delay="200ms"
              >
                <h4>Services</h4>
                <ul className="footer-menu-one">
                  {SERVICES_DATA.map((service, index) => (
                    <li key={index}>
                      <Image
                        src={`/assets/images/footer-icon/footer-one-${
                          index + 1
                        }.svg`}
                        alt={service.title}
                        width={20}
                        height={20}
                      />
                      <Link href={`/service/${service.id}`}>
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-6">
              <div
                className="footer-widget-one animate fadeInRight wow"
                data-wow-duration="1500ms"
                data-wow-delay="400ms"
              >
                <h4>Pages</h4>
                <ul className="footer-menu-one">
                  <li>
                    <Image
                      src="/assets/images/footer-icon/footer-one-10.svg"
                      alt="icon"
                      width={20}
                      height={20}
                    />
                    <Link href="/service">Services</Link>
                  </li>
                  <li>
                    <Image
                      src="/assets/images/footer-icon/footer-one-10.svg"
                      alt="icon"
                      width={20}
                      height={20}
                    />
                    <Link href="/process">Process</Link>
                  </li>
                  <li>
                    <Image
                      src="/assets/images/footer-icon/footer-one-6.svg"
                      alt="icon"
                      width={20}
                      height={20}
                    />
                    <Link href="/courses">Courses</Link>
                  </li>

                  <li>
                    <Image
                      src="/assets/images/footer-icon/footer-one-8.svg"
                      alt="icon"
                      width={20}
                      height={20}
                    />
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Image
                      src="/assets/images/footer-icon/footer-one-7.svg"
                      alt="icon"
                      width={20}
                      height={20}
                    />
                    <Link href="/team">Team</Link>
                  </li>

                  <li>
                    <Image
                      src="/assets/images/footer-icon/footer-one-9.svg"
                      alt="icon"
                      width={20}
                      height={20}
                    />
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3">
              <div
                className="footer-newslatter-one animate fadeInRight wow"
                data-wow-duration="1500ms"
                data-wow-delay="600ms"
              >
                <form action="#"></form>
                <ul className="footer-social-media-one">
                  <li>
                    <Link href="https://www.facebook.com/profile.php?id=61572024643533">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com/company/chrysaline-group/">
                      <Image
                        src="/assets/images/svg/header/linkedin.svg"
                        alt="icon"
                        width={24}
                        height={24}
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12">
              <div className="footer-lower-one">
                <p className="lead">
                  © Copyright@ Chrysaline Group All rights reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
