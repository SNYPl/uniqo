'use client'

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import NavItem from './NavItem';
import { navigationItems } from './navigation.config';

const Header: FC = () => {
  const pathname = usePathname();

  const isActiveLink = (path: string, matchStartsWith?: boolean) => {
    if (matchStartsWith) {
      return pathname.startsWith(path);
    }
    return pathname === path;
  };

  return (
    <>
      <div className="topbar-one">
        <div className="container-fluid">
          <div className="topbar-one-inner">
            <ul className="topbar-left-one">
              <li>
                <Image
                  src="/assets/images/svg/header/mail.svg"
                  alt="icon"
                  width={24}
                  height={24}
                />
                <Link href="mailto:info@chrysalinegroup.com">
                  info@chrysalinegroup.com
                </Link>
              </li>
              <li>
                <Image
                  src="/assets/images/svg/header/clock.svg"
                  alt="icon"
                  width={24}
                  height={24}
                />
                <p>Mon - Frd 10:00 AM - 6:00 PM</p>
              </li>
            </ul>
            <div className="topbar-right-one">
              {/* <ul className="topbar-link-right-one">
                <li>
                  <Link href="#">Login</Link>
                </li>
              </ul> */}
              <ul className="topbar-social-media-one">
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
      </div>
      <header className="main-header">
        <div className="container-fluid">
          <nav className="main-menu">
            <div className="main-menu-logo">
              <Link href="/">
                <Image
                  src="/assets/images/logo.png"
                  alt="header-logo"
                  width={150}
                  height={40}
                />
              </Link>
            </div>
            <div className="main-menu-inner">
              <ul className="main-menu-list">
                {navigationItems.map((item) => (
                  <NavItem
                    key={item.path}
                    {...item}
                    isActive={isActiveLink(item.path, item.matchStartsWith)}
                  />
                ))}
              </ul>
              <div className="header-menu-collaps">
                <span className="line-1"></span>
                <span className="line-2"></span>
                <span className="line-3"></span>
              </div>
              <div className="main-menu-right">
                <Link href="/contact" className="btn btn-light btn-theme">
                  Get In Touch +
                </Link>
                {/* <button className="search-btn">
                  <Image
                    src="/assets/images/svg/header/Search.svg"
                    alt="icon"
                    width={24}
                    height={24}
                  />
                </button> */}
                <div className="header-side-menu">
                  <span className="line-1"></span>
                  <span className="line-2"></span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
