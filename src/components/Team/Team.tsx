import React from "react";
import Image from "next/image";
import Link from "next/link";

const Team = () => {
  return (
    <div className="team-section-one">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 m-auto">
            <div className="heading-box text-center">
              <span
                className="sub-title animate fadeInUp wow"
                data-wow-duration="1500ms"
              >
                Team
              </span>
              <h2
                className="heading-title animate fadeInUp wow"
                data-wow-duration="1500ms"
                data-wow-delay="200ms"
              >
                Our Team of Dedicated Digital Professionals
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center gutter-y-60">
          <div className="col-lg-3 col-md-5">
            <div
              className="team-box-one animate fadeInUp wow"
              data-wow-duration="1500ms"
            >
              <div className="team-image-one">
                <Image
                  src="/assets/images/team/team-1.jpg"
                  alt="team-image"
                  width={400}
                  height={400}
                />
              </div>
              <div className="team-details-one">
                <h4>Bela Beradze</h4>
                <p>COO</p>
              </div>
              <ul className="team-social-media-one">
                <li>
                  <Link href="https://www.linkedin.com/">
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
          <div className="col-lg-3 col-md-5">
            <div
              className="team-box-one animate fadeInUp wow"
              data-wow-duration="1500ms"
              data-wow-delay="400ms"
            >
              <div className="team-image-one">
                <Image
                  src="/assets/images/team/team-2.jpg"
                  alt="team-image"
                  width={400}
                  height={400}
                />
              </div>
              <div className="team-details-one">
                <h4>Kesi Katsitadze</h4>
                <p>CEO</p>
              </div>
              <ul className="team-social-media-one">
                <li>
                  <Link href="https://www.linkedin.com/">
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
          <div className="col-lg-3 col-md-5">
            <div
              className="team-box-one animate fadeInUp wow"
              data-wow-duration="1500ms"
              data-wow-delay="600ms"
            >
              <div className="team-image-one">
                <Image
                  src="/assets/images/team/team-3.jpg"
                  alt="team-image"
                  width={400}
                  height={400}
                />
              </div>
              <div className="team-details-one">
                <h4>Mzia Zhvania</h4>
                <p>CSO</p>
              </div>
              <ul className="team-social-media-one">
                <li>
                  <Link href="https://www.linkedin.com/">
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
          <div className="col-lg-3 col-md-5">
            <div
              className="team-box-one animate fadeInUp wow"
              data-wow-duration="1500ms"
              data-wow-delay="800ms"
            >
              <div className="team-image-one">
                <Image
                  src="/assets/images/team/team-4.jpeg"
                  alt="team-image"
                  width={400}
                  height={400}
                />
              </div>
              <div className="team-details-one">
                <h4>Nino Pochxidze</h4>
                <p>Head of Trainings</p>
              </div>
              <ul className="team-social-media-one">
                <li>
                  <Link href="https://www.linkedin.com/">
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
        </div>
      </div>
    </div>
  );
};

export default Team;
