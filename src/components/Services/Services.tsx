import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Services = () => {
  return (
    <div className="service-section-one">
    <div className="container">
        <div className="row gutter-y-30 justify-content-between">
            <div className="col-lg-5">
                <div className="service-left-one">
                    <div className="heading-box">
                        <span className="sub-title animate fadeInUp wow" data-wow-duration="1500ms">Services</span>
                        <h2 className="heading-title animate fadeInUp wow" data-wow-duration="1500ms" data-wow-delay="200ms">We Always Provide Best Business Services to Our Customers</h2>
                        <div className="service-left-details-one animate fadeInUp wow" data-wow-duration="1500ms" data-wow-delay="400ms">
                            <p className="lead">Leverage agile frameworks to provide a robust synopsis for
                                high level overviews. Iterative approaches to collaborative.</p>
                            <Link href="/service" className="btn btn-secondary btn-theme">More Services +</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-6 col-lg-7">
                <div className="service-right-one">
                    <div className="service-right-inner-one">
                        <div className="service-box-one animate fadeInUp wow" data-wow-duration="1500ms">
                            <Image src="/assets/images/services/services-1.png" alt="icon" width={100} height={100} />
                            <div className="service-icon-one">
                                <svg className="animated-svg" width="71" height="74" viewBox="0 0 71 74" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path className="path"
                                        d="M67.125 9.625H3.875C2.28718 9.625 1 10.9122 1 12.5V55.625C1 57.2128 2.28718 58.5 3.875 58.5H67.125C68.7128 58.5 70 57.2128 70 55.625V12.5C70 10.9122 68.7128 9.625 67.125 9.625Z"
                                        stroke="#D1A97A" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" />
                                    <path className="path" d="M47 58.5L58.5 72.875" stroke="#D1A97A" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                    <path className="path" d="M24 58.5L12.5 72.875" stroke="#D1A97A" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                    <path className="path" d="M24 35.5V44.125" stroke="#D1A97A" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                    <path className="path" d="M35.5 29.75V44.125" stroke="#D1A97A" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                    <path className="path" d="M47 24V44.125" stroke="#D1A97A" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                    <path className="path" d="M35.5 9.625V1" stroke="#D1A97A" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h4>Business Analysis</h4>
                            <p>We guarantee to provide affordable business consulting solutions that help you reduce
                                costs and your profits.</p>
                            <Link href="/service-details" className="service-btn-one"><i className="fa-solid fa-angle-right"></i></Link>
                        </div>
                        <div className="service-box-one animate fadeInUp wow" data-wow-duration="1500ms" data-wow-delay="400ms">
                            <Image src="/assets/images/services/services-2.png" alt="icon" width={100} height={100} />
                            <div className="service-icon-one">
                                <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 76 76"
                                    fill="none">
                                    <path
                                        d="M42.75 9.5H33.25C31.9383 9.5 30.875 10.5633 30.875 11.875V21.375C30.875 22.6867 31.9383 23.75 33.25 23.75H42.75C44.0617 23.75 45.125 22.6867 45.125 21.375V11.875C45.125 10.5633 44.0617 9.5 42.75 9.5Z"
                                        stroke="#D1A97A" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" />
                                    <path
                                        d="M23.75 49.875H14.25C12.9383 49.875 11.875 50.9383 11.875 52.25V61.75C11.875 63.0617 12.9383 64.125 14.25 64.125H23.75C25.0617 64.125 26.125 63.0617 26.125 61.75V52.25C26.125 50.9383 25.0617 49.875 23.75 49.875Z"
                                        stroke="#D1A97A" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" />
                                    <path
                                        d="M61.75 49.875H52.25C50.9383 49.875 49.875 50.9383 49.875 52.25V61.75C49.875 63.0617 50.9383 64.125 52.25 64.125H61.75C63.0617 64.125 64.125 63.0617 64.125 61.75V52.25C64.125 50.9383 63.0617 49.875 61.75 49.875Z"
                                        stroke="#D1A97A" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" />
                                    <path d="M38 23.75V35.625" stroke="#D1A97A" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M57 35.625V49.875" stroke="#D1A97A" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M19 49.875V35.625" stroke="#D1A97A" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.125 35.625H68.875" stroke="#D1A97A" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h4>Work organization</h4>
                            <p>We specialize in serving such as healthcare, finance, or manufacturing, and offer
                                tailored solutions.</p>
                            <Link href="/service-details" className="service-btn-one"><i className="fa-solid fa-angle-right"></i></Link>
                        </div>
                    </div>
                    <div className="service-right-inner-one">
                        <div className="service-box-one  animate fadeInUp wow" data-wow-duration="1500ms">
                            <Image src="/assets/images/services/services-3.png" alt="icon" width={100} height={100} />
                            <div className="service-icon-one">
                                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="71" viewBox="0 0 80 71"
                                    fill="none">
                                    <path
                                        d="M11.9888 51.964C11.3904 51.9508 10.8124 51.7439 10.3416 51.3744C9.8708 51.0048 9.53255 50.4925 9.37764 49.9144L6.15586 37.8905C6.00095 37.3124 6.03774 36.6996 6.26069 36.1442C6.48364 35.5887 6.88073 35.1206 7.39237 34.81L61.3429 1.0233C61.71 0.800447 62.1239 0.666128 62.5519 0.630976C62.9799 0.595825 63.4102 0.660806 63.8088 0.820773C64.2073 0.98074 64.5631 1.2313 64.8481 1.55261C65.133 1.87392 65.3392 2.25715 65.4503 2.67196L78.3374 50.7673C78.4486 51.1821 78.4616 51.6171 78.3755 52.0378C78.2894 52.4586 78.1066 52.8535 77.8414 53.1913C77.5763 53.5291 77.2361 53.8005 76.8478 53.9841C76.4596 54.1676 76.034 54.2583 75.6046 54.2488L11.9888 51.964Z"
                                        stroke="#D1A97A" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" />
                                    <path
                                        d="M24.3638 52.4068L27.5695 64.3705C27.7593 65.0792 28.223 65.6834 28.8583 66.0502C29.4937 66.417 30.2487 66.5164 30.9574 66.3265L41.6452 63.4627C42.3539 63.2729 42.9581 62.8092 43.3249 62.1739C43.6917 61.5385 43.7911 60.7835 43.6012 60.0748L32.6016 19.0234"
                                        stroke="#D1A97A" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h4>Digital marketing</h4>
                            <p>We specialize in serving specific industries, such as healthcare, finance, or
                                manufacturing solutions.</p>
                            <Link href="/service-details" className="service-btn-one"><i className="fa-solid fa-angle-right"></i></Link>
                        </div>
                        <div className="service-box-one animate fadeInUp wow" data-wow-duration="1500ms" data-wow-delay="400ms">
                            <Image src="/assets/images/services/services-4.png" alt="icon" width={100} height={100} />
                            <div className="service-icon-one">
                                <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 76 76"
                                    fill="none">
                                    <path
                                        d="M1.175 71.129L20.6056 17.7032C20.7708 17.2467 21.0486 16.8394 21.4133 16.519C21.7779 16.1986 22.2176 15.9754 22.6914 15.8702C23.1653 15.7651 23.6581 15.7813 24.124 15.9173C24.59 16.0534 25.0141 16.3049 25.3569 16.6486L59.3558 50.6475C59.6985 50.9906 59.9491 51.4147 60.0844 51.8804C60.2198 52.3461 60.2354 52.8384 60.1298 53.3118C60.0243 53.7851 59.8011 54.2242 59.4808 54.5884C59.1605 54.9525 58.7535 55.23 58.2975 55.3951L4.87166 74.8257C4.35572 75.0141 3.79667 75.0513 3.26033 74.9327C2.72399 74.8141 2.23269 74.5448 1.84429 74.1564C1.45588 73.768 1.18654 73.2767 1.06796 72.7403C0.94939 72.204 0.986527 71.6449 1.175 71.129Z"
                                        stroke="#D1A97A" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" />
                                    <path
                                        d="M48.3574 21.7219C48.3574 21.7219 48.3574 12.8411 57.2383 12.8411C66.1192 12.8411 66.1192 3.96021 66.1192 3.96021"
                                        stroke="#D1A97A" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" />
                                    <path d="M39.4766 1V9.88087" stroke="#D1A97A" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M66.1191 36.5234L72.0397 42.444" stroke="#D1A97A"
                                        strokeWidth="1.51699" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M66.1191 24.6825L75 21.7222" stroke="#D1A97A" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15.0879 32.8562L43.144 60.9124" stroke="#D1A97A"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M23.6073 68.0172L7.98438 52.3943" stroke="#D1A97A"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h4>Innovation space</h4>
                            <p>Our solutions are scalable and can grow with your business, the
                                most value out of your investment.</p>
                            <Link href="/service-details" className="service-btn-one"><i className="fa-solid fa-angle-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default Services; 