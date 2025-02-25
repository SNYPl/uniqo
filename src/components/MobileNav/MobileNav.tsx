import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MobileNav = () => {
  return (
    <div className="mobile-nav-wrapper">
        <div className="mobile-nav-overlay mobile-nav-toggler"></div>
        <div className="mobile-nav-content">
            <a href="#" className="mobile-nav-close mobile-nav-toggler">
                <span></span>
                <span></span>
            </a>
            <div className="logo-box">
                <Link href="/"><Image width={150} height={50} src="/assets/images/Logo.svg" alt="logo" /></Link>
            </div>
            <div className="mobile-nav-container">
                <ul className="mobile-menu-list">
                    <li className="menu-item-has-children dropdown">
                        <Link href="#">Home</Link>
                        <ul>
                            <li><Link href="/">Home-1</Link></li>
                            <li><Link href="/index-2">Home-2</Link></li>
                            <li><Link href="/index-3">Home-3</Link></li>
                            <li><Link href="/index-4">Home-4</Link></li>
                            <li><Link href="/index-5">Home-5</Link></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children dropdown">
                        <Link href="#">Pages</Link>
                        <ul>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/careers">Careers</Link></li>
                            <li><Link href="/team">Meet The Team</Link></li>
                            <li><Link href="/testimonial">Testimonial</Link></li>
                            <li><Link href="/pricing">Pricing</Link></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children dropdown">
                        <Link href="#">Services</Link>
                        <ul>
                            <li><Link href="/service">Services</Link></li>
                            <li><Link href="/service-details">Services Details</Link></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children dropdown">
                        <Link href="#">Portfolio</Link>
                        <ul>
                            <li><Link href="/portfolio">Portfolio</Link></li>
                            <li><Link href="/portfolio-details">Portfolio Details</Link></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children dropdown">
                        <Link href="#">Blog</Link>
                        <ul>
                            <li><Link href="/blog">Blog Standard</Link></li>
                            <li><Link href="/blog-details">Blog Details</Link></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children dropdown">
                        <Link href="#">Shop</Link>
                        <ul>
                            <li><Link href="/shop">Shop</Link></li>
                            <li><Link href="/shop-details">Product Details</Link></li>
                            <li><Link href="/cart">Cart</Link></li>
                            <li><Link href="/checkout">Checkout</Link></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children">
                        <Link href="/contact">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default MobileNav; 