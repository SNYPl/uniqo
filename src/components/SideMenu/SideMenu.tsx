import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
                <Link href="/"><Image src="/assets/images/footer-logo.svg" alt="logo" width={150} height={50} /></Link>
            </div>
            <div className="side-menu-container">
                <p>Uniqo - Business Consulting WordPress Theme for professionals, services, and solutions.</p>
                <h4>Contact Info</h4>
                <ul>
                    <li>
                        <span>Mon - Frd : 8:00 -16:00</span>
                    </li>
                    <li>
                        <a href="mailto:help@company.com">help@company.com</a>
                    </li>
                    <li>
                        <a href="telto:+120.098.45611"> +120.098.456 11</a>
                    </li>
                </ul>
                <h4>Office Address</h4>
                <p>
                    28 Valencia Street, New York United States of America
                </p>
                <ul className="side-menu-social-media">
                    <li><Link href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></Link></li>
                    <li><Link href="https://x.com/"><i className="fa-brands fa-twitter"></i></Link></li>
                    <li><Link href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></Link></li>
                    <li><Link href="https://in.linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default SideMenu; 