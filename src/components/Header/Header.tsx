import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: FC = () => {
  return (
    <>
    <div className="topbar-one">
        <div className="container-fluid">
            <div className="topbar-one-inner">
                <ul className="topbar-left-one">
                    <li>
                        <Image src="/assets/images/svg/header/mail.svg" alt="icon" width={24} height={24} />
                        <a href="mailto:needhelp@company.com">needhelp@company.com</a>
                    </li>
                    <li>
                        <Image src="/assets/images/svg/header/clock.svg" alt="icon" width={24} height={24} />
                        <p>Mon - Sat 8:00 AM - 6:00 PM</p>
                    </li>
                    <li>
                        <Image src="/assets/images/svg/header/location.svg" alt="icon" width={24} height={24} />
                        <p>135 klf, Hotland, USA</p>
                    </li>
                </ul>
                <div className="topbar-right-one">
                    <ul className="topbar-link-right-one">
                        <li><Link href="#">Login</Link></li>
                        <li><Link href="#">Company News</Link></li>
                        <li><Link href="#">FAQs</Link></li>
                    </ul>
                    <ul className="topbar-social-media-one">
                        <li><Link href="https://www.instagram.com/"><Image src="/assets/images/svg/header/Insta.svg" alt="icon" width={24} height={24} /></Link></li>
                        <li><Link href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></Link></li>
                        <li><Link href="https://x.com/"><Image src="/assets/images/svg/header/Twiter.svg" alt="icon" width={24} height={24} /></Link></li>
                        <li><Link href="https://www.pinterest.com/"><Image src="/assets/images/svg/header/Pintrest.svg" alt="icon" width={24} height={24} /></Link></li>
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
                        <Image src="/assets/images/Logo.svg" alt="header-logo" width={150} height={40} />
                    </Link>
                </div>
                <div className="main-menu-inner">
                    <ul className="main-menu-list">
                        <li className="menu-item-children active"><Link href="#">Home</Link></li>
                        <li className="menu-item-children"><Link href="#">Services</Link></li>
                        <li className="menu-item-children"><Link href="#">About us</Link></li>
                        <li className="menu-item-children"><Link href="/contact">Contact Us</Link></li>
                    </ul>
                    <div className="header-menu-collaps">
                        <span className="line-1"></span>
                        <span className="line-2"></span>
                        <span className="line-3"></span>
                    </div>
                    <div className="main-menu-right">
                        <Link href="/contact" className="btn btn-light btn-theme">Get In Touch +</Link>
                        <button className="search-btn">
                            <Image src="/assets/images/svg/header/Search.svg" alt="icon" width={24} height={24} />
                        </button>
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