import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <>
       <div className="about-section-one">
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-lg-8">
                    <div className="about-left-one">
                        <Image src="/assets/images/about/about-one.png" alt="about" width={500} height={500} />
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="about-right-one">
                        <div className="heading-box">
                            <span className="sub-title animate fadeInUp wow" data-wow-duration="1500ms">About Us</span>
                            <h2 className="heading-title animate fadeInUp wow" data-wow-duration="1500ms" data-wow-delay="200ms">We Work with you to Make your <span>Vision a Reality</span></h2>
                        </div>
                        <div className="about-details-one animate fadeInUp wow" data-wow-duration="1500ms" data-wow-delay="300ms">
                            <p className="lead">At uniqo, we are a renowned global consulting firm committed to
                                collaborating with business and societal leaders in overcoming their most critical
                                challenges and seizing their greatest opportunities.</p>
                            <div className="about-details-inner-one">
                                <span>
                                    <span>
                                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M40.5 12H7.5C6.67157 12 6 12.6716 6 13.5V37.5C6 38.3284 6.67157 39 7.5 39H40.5C41.3284 39 42 38.3284 42 37.5V13.5C42 12.6716 41.3284 12 40.5 12Z"
                                                stroke="#616866" strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M31.5 12V9C31.5 8.20435 31.1839 7.44129 30.6213 6.87868C30.0587 6.31607 29.2956 6 28.5 6H19.5C18.7044 6 17.9413 6.31607 17.3787 6.87868C16.8161 7.44129 16.5 8.20435 16.5 9V12"
                                                stroke="#616866" strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M42 22.1831C36.5298 25.3481 30.3198 27.0099 24 27C17.6804 27.0101 11.4705 25.3489 6 22.185"
                                                stroke="#616866" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M21 21H27" stroke="#616866" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </span>
                                <div className="about-details-box-title">
                                    <h5>Business Insurance</h5>
                                    <p className="lead">Collaborating with business and societal leaders in overcoming .</p>
                                </div>
                            </div>
                            <div className="about-project-one">
                                <h4>430 K</h4>
                                <p>Projects completed in last 5 years</p>
                            </div>
                        </div>
                        <Link href="/about" className="btn btn-secondary btn-theme">About Us <span>+</span></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    
    </>
  );
};

export default About; 