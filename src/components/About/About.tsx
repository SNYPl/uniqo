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
                        <Image src="/assets/images/about/about-us-landing.jpg" alt="about" width={500} height={500} />
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="about-right-one">
                        <div className="heading-box">
                            <span className="sub-title animate fadeInUp wow" data-wow-duration="1500ms">About Us</span>
                            <h2 className="heading-title animate fadeInUp wow" data-wow-duration="1500ms" data-wow-delay="200ms">We Work with you to Make your <span>Vision a Reality</span></h2>
                        </div>
                        <div className="about-details-one animate fadeInUp wow" data-wow-duration="1500ms" data-wow-delay="300ms">
                            <p className="lead">Chrysaline Group is a neuroleadership consulting firm that helps organizations drive business
                            growth and gain a competitive edge through a new dimension of leadership - Neuroscience.</p>
                           
                           
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