import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ServiceDetails = () => {
  return (
    <div className="service-details-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="service-details-left">
                        <div className="service-details-image animate fadeInUp wow" data-wow-duration="1500ms">
                            <Image src="/assets/images/services/service-details-1.jpg" alt="image" width={800} height={500} />
                        </div>
                        <div className="service-details-content animate fadeInUp wow" data-wow-duration="1500ms" data-wow-delay="200ms">
                            <h3>Business Analysis</h3>
                            <p className="lead">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                            <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
                            <div className="service-details-box">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="service-details-box-image">
                                            <Image src="/assets/images/services/service-details-2.jpg" alt="image" width={400} height={300} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="service-details-box-content">
                                            <h4>Business Analysis</h4>
                                            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                                            <ul>
                                                <li><i className="fa-solid fa-check"></i>Business Analysis</li>
                                                <li><i className="fa-solid fa-check"></i>24/7 Support</li>
                                                <li><i className="fa-solid fa-check"></i>Consulting Plan</li>
                                                <li><i className="fa-solid fa-check"></i>Professional Team</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
                            <div className="service-details-list">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><i className="fa-solid fa-check"></i>Business Analysis</li>
                                            <li><i className="fa-solid fa-check"></i>24/7 Support</li>
                                            <li><i className="fa-solid fa-check"></i>Consulting Plan</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><i className="fa-solid fa-check"></i>Professional Team</li>
                                            <li><i className="fa-solid fa-check"></i>Creative Design</li>
                                            <li><i className="fa-solid fa-check"></i>Quick Tips</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="service-details-right">
                        <div className="service-details-widget animate fadeInRight wow" data-wow-duration="1500ms">
                            <h4>All Services</h4>
                            <ul>
                                <li>
                                    <p>Business Analysis</p>
                                    <Image src="/assets/images/services/service-details-arrow-right.svg" alt="icon" width={20} height={20} />
                                </li>
                                <li>
                                    <p>Finance Solution</p>
                                    <Image src="/assets/images/services/service-details-arrow-right.svg" alt="icon" width={20} height={20} />
                                </li>
                                <li>
                                    <p>Investment Policy</p>
                                    <Image src="/assets/images/services/service-details-arrow-right.svg" alt="icon" width={20} height={20} />
                                </li>
                                <li>
                                    <p>Tax Management</p>
                                    <Image src="/assets/images/services/service-details-arrow-right.svg" alt="icon" width={20} height={20} />
                                </li>
                                <li>
                                    <p>Market Research & Analysis</p>
                                    <Image src="/assets/images/services/service-details-arrow-right.svg" alt="icon" width={20} height={20} />
                                </li>
                            </ul>
                        </div>
                        <div className="service-details-cta-widget animate fadeInRight wow" data-wow-duration="1500ms" data-wow-delay="400ms">
                            <Image src="/assets/images/logo.png" alt="icon" width={150} height={50} />
                            <h5>Need Help? We Are Here To Help You</h5>
                            <Link href="/contact" className="btn btn-primary btn-theme">Contact Us +</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ServiceDetails; 