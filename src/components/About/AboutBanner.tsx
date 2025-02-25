import React from 'react';
import Link from 'next/link';

const AboutBanner = () => {
  return (
    <div className="about-lower">
        <div className="container-fluid">
            <div className="row banner-box-outer-five">
                <div className="col-lg-4 col-md-6">
                    <div className="banner-box-five">
                        <div className="banner-box-icon-five">
                            <svg width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M36.2539 50.9375V71.5" stroke="#3B4443" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M5.72265 18.625C1.84288 25.345 0.288841 33.1573 1.30155 40.8505C2.31426 48.5437 5.83712 55.6878 11.3238 61.1748C16.8105 66.6618 23.9543 70.1851 31.6474 71.1982C39.3405 72.2114 47.153 70.6578 53.8732 66.7785C60.5934 62.8991 65.8458 56.9107 68.8158 49.742C71.7858 42.5734 72.3074 34.625 70.2998 27.1297C68.2921 19.6344 63.8674 13.0109 57.7118 8.28656C51.5563 3.56219 44.0138 1.00093 36.2543 1V21.5625C39.4874 21.5632 42.6299 22.6307 45.1945 24.5994C47.7591 26.5681 49.6024 29.3279 50.4387 32.451C51.2749 35.574 51.0574 38.8858 49.8197 41.8726C48.582 44.8594 46.3934 47.3544 43.5933 48.9706C40.7932 50.5868 37.5381 51.234 34.3327 50.8117C31.1273 50.3894 28.1508 48.9213 25.8648 46.6351C23.5788 44.3488 22.111 41.3721 21.6891 38.1667C21.2672 34.9613 21.9147 31.7062 23.5312 28.9063L5.72265 18.625Z" stroke="#3B4443" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M22.0621 40.0542L2.19727 45.3747" stroke="#3B4443" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div className="banner-box-details-five">
                            <h4>Project Analysis</h4>
                            <p className="lead">Research & development in project analysis sector of a company represents its strengthfinding a solution.</p>
                            <Link href="/service-details" className="banner-btn-five">+</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="banner-box-five">
                        <div className="banner-box-icon-five">
                            <svg width="83" height="64" viewBox="0 0 83 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M60.875 32C63.1532 32 65 30.1532 65 27.875C65 25.5968 63.1532 23.75 60.875 23.75C58.5968 23.75 56.75 25.5968 56.75 27.875C56.75 30.1532 58.5968 32 60.875 32Z" fill="#3B4443"/>
                                {/* Add other paths */}
                            </svg>
                        </div>
                        <div className="banner-box-details-five">
                            <h4>Investment Analysis</h4>
                            <p className="lead">We approach every client relationship with a unique and invigorating perspective, coupled with an unwavering energy.</p>
                            <Link href="/service-details" className="banner-btn-five">+</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="banner-box-five">
                        <div className="banner-box-icon-five">
                            <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M34 67C52.2254 67 67 52.2254 67 34C67 15.7746 52.2254 1 34 1C15.7746 1 1 15.7746 1 34C1 52.2254 15.7746 67 34 67Z" stroke="#3B4443" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                {/* Add other paths */}
                            </svg>
                        </div>
                        <div className="banner-box-details-five">
                            <h4>Global Operation</h4>
                            <p className="lead">We approach every client relationship with a unique and invigorating perspective, coupled with an unwavering energy.</p>
                            <Link href="/service-details" className="banner-btn-five">+</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AboutBanner; 