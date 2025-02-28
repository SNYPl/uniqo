import React from "react";
import Image from "next/image";
import Link from "next/link";

const SideMenu = () => {
  return (
    <div className="side-menu-wrapper">
      <div className="side-menu-overlay side-menu-toggler"></div>
      <div className="side-menu-content">
        <a href="javascript:void(0)" className="side-menu-toggler">
          <span></span>
          <span></span>
        </a>
        <div className="side-menu-logo-box">
          <Link href="/">
            <Image
              src="/assets/images/footer-logo.png"
              alt="logo"
              width={150}
              height={50}
            />
          </Link>
        </div>
        <div className="side-menu-container">
          <p>
            Chrysaline Group - Unleash the power of neuroscience in leadership
            to boost effectiveness and drive lasting resilience in your
            organization.
          </p>
          <h4>Contact Info</h4>
          <ul>
            <li>
              <span>Mon - Frd : 10:00 -18:00</span>
            </li>
            <li>
              <a href="mailto:info@chrysalinegroup.com">
                info@chrysalinegroup.com
              </a>
            </li>
            <li>
              <a href="telto:+120.098.45611"> +995 599 87 47 49</a>
            </li>
          </ul>

          <ul className="side-menu-social-media">
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
    </div>
  );
};

export default SideMenu;
