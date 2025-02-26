import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="main-footer">
        
        {/* footer one start */}
        <footer className="footer-one">
            <div className="container-fluid">
                <div className="row gutter-y-30">
                    <div className="col-xl-4">
                        <div className="footer-about-one animate fadeInRight wow" data-wow-duration="1500ms">
                            <div className="footer-logo-one">
                                <Image src="/assets/images/footer-logo.svg" alt="logo" width={150} height={50} />
                            </div>
                            <h4>Professional & modern, a theme designed to help your business stand out from the rest.</h4>
                            <p className="lead">We understand that business can be chaotic. That s where we come in. We re focused on adding.</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="footer-widget-one animate fadeInRight wow" data-wow-duration="1500ms" data-wow-delay="200ms">
                            <h4>Services</h4>
                            <ul className="footer-menu-one">
                                <li>
                                    <Image src="/assets/images/footer-icon/footer-one-1.svg" alt="icon" width={20} height={20} />
                                    <Link href="/service-details">Financial Analysis</Link>
                                </li>
                                <li>
                                    <Image src="/assets/images/footer-icon/footer-one-2.svg" alt="icon" width={20} height={20} />
                                    <Link href="/service-details">Work organization</Link>
                                </li>
                                <li>
                                    <Image src="/assets/images/footer-icon/footer-one-3.svg" alt="icon" width={20} height={20} />
                                    <Link href="/service-details">Digital Marketing</Link>
                                </li>
                                <li>
                                    <Image src="/assets/images/footer-icon/footer-one-4.svg" alt="icon" width={20} height={20} />
                                    <Link href="/service-details">Innovation space</Link>
                                </li>
                                <li>
                                    <Image src="/assets/images/footer-icon/footer-one-5.svg" alt="icon" width={20} height={20} />
                                    <Link href="/service-details">Risk Advisory</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-4 col-md-6">
                        <div className="footer-widget-one animate fadeInRight wow" data-wow-duration="1500ms" data-wow-delay="400ms">
                            <h4>Pages</h4>
                            <ul className="footer-menu-one">
                                <li>
                                    <Image src="/assets/images/footer-icon/footer-one-6.svg" alt="icon" width={20} height={20} />
                                    <Link href="/about">About</Link>
                                </li>
                                <li>
                                    <Image src="/assets/images/footer-icon/footer-one-7.svg" alt="icon" width={20} height={20} />
                                    <Link href="/careers">Career</Link>
                                </li>
                                <li>
                                    <Image src="/assets/images/footer-icon/footer-one-8.svg" alt="icon" width={20} height={20} />
                                    <Link href="/careers">Applications</Link>
                                </li>
                                <li>
                                    <Image src="/assets/images/footer-icon/footer-one-9.svg" alt="icon" width={20} height={20} />
                                    <Link href="/contact">Contact Us</Link>
                                </li>
                                <li>
                                    <Image src="/assets/images/footer-icon/footer-one-10.svg" alt="icon" width={20} height={20} />
                                    <Link href="/portfolio">Case Studies</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4">
                        <div className="footer-newslatter-one animate fadeInRight wow" data-wow-duration="1500ms" data-wow-delay="600ms">
                            <h4>Newsletter </h4>
                            <form action="#">
                                <div className="newslatter-form-group">
                                    <input type="email" name="email" placeholder="Enter your email" className="form-control" required />
                                    <button type="submit" className="btn-link">
                                        <Image src="/assets/images/svg/arrow-link.svg" alt="icon" width={20} height={20} />
                                    </button>
                                </div>
                            </form>
                            <ul className="footer-social-media-one">
                                <li><Link href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                <li><Link href="https://x.com/"><i className="fa-brands fa-twitter"></i></Link></li>
                                <li><Link href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></Link></li>
                                <li><Link href="https://in.linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="footer-lower-one">
                            <p className="lead">© Copyright@ Uniqo All rights reserved</p>
                            <ul>
                                <li><Link href="/about">Terms and conditions</Link></li>
                                <li><span>|</span></li>
                                <li><Link href="/about">Privacy policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  );
};

export default Footer; 