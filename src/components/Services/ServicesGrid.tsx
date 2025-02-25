import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ServicesGrid = () => {
  return (
    <div className="service-section-two srvice">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 m-auto">
                    <div className="heading-box text-center">
                        <span className="sub-title animate fadeInUp wow" data-wow-duration="1500ms">Services</span>
                        <h2 className="heading-title animate fadeInUp wow" data-wow-duration="1500ms" data-wow-delay="200ms">
                            We are building great future together Be with us
                        </h2>
                    </div>
                </div>
            </div>
            <div className="row gutter-y-30">
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                    <div key={index} className="col-lg-4 col-md-6">
                        <div className="service-box-two animate fadeInUp wow" data-wow-duration="1500ms" data-wow-delay={`${index * 400}ms`}>
                            <div className="service-image-two">
                                <Image src={`/assets/images/services/services-two-${(index % 3) + 1}.jpg`} alt="service-image" width={500} height={500} />
                                <div className="service-icon-two">
                                    <svg width="45" height="47" viewBox="0 0 45 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M42.2083 6.37476H2.79167C1.80216 6.37476 1 7.17691 1 8.16642V35.0414C1 36.0309 1.80216 36.8331 2.79167 36.8331H42.2083C43.1978 36.8331 44 36.0309 44 35.0414V8.16642C44 7.17691 43.1978 6.37476 42.2083 6.37476Z" stroke="#1B2429" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        {/* Add other SVG paths */}
                                    </svg>
                                </div>
                            </div>
                            <div className="service-details-two">
                                <h4><Link href="/service-details">{index % 3 === 0 ? "Business Analysis" : index % 3 === 1 ? "Work organization" : "Digital marketing"}</Link></h4>
                                <p>{index % 3 === 0 ? "We guarantee to provide affordable business consulting solutions" : index % 3 === 1 ? "Our solutions are scalable and can grow with your business" : "Sed Perspiciatis unde Omnis Iste Sed ut Pers piciatis unde Omnis Ist"}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default ServicesGrid; 