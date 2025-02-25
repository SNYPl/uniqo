import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WhyChoose = () => {
  return (
    <div className="why-choose-section-one">
        <div className="why-choose-background-one">
            <div className="why-choose-background-image-one">
                <Image src="/assets/images/why-choose/why-choose-image-1.jpg" alt="why-choose-image" width={500} height={500} />
            </div>
        </div>
        <div className="video-play-one">
            <p>why clients <br /> choose us</p>
            <Link href="https://www.youtube.com/watch?v=rzfmZC3kg3M">
                <Image src="/assets/images/play-icon.svg" alt="icon" width={50} height={50} />
            </Link>
        </div>
        <div className="container">
            <div className="counter-one">
                <div className="counter-box-one">
                    <div className="counter-box-one-inner">
                        <div className="counter-icon">
                            <Image src="/assets/images/svg/counter-1.svg" alt="icon" width={50} height={50} />
                        </div>
                        <h4><span className="counter">1962 </span><span>+</span></h4>
                        <p>Companies analyzed</p>
                    </div>
                </div>
                <div className="counter-box-one">
                    <div className="counter-box-one-inner">
                        <div className="counter-icon">
                            <Image src="/assets/images/svg/counter-2.svg" alt="icon" width={50} height={50} />
                        </div>
                        <h4><span className="counter">1856 </span><span>+</span></h4>
                        <p>Strategies planned</p>
                    </div>
                </div>
                <div className="counter-box-one">
                    <div className="counter-box-one-inner">
                        <div className="counter-icon">
                            <Image src="/assets/images/svg/counter-3.svg" alt="icon" width={50} height={50} />
                        </div>
                        <h4><span className="counter">2566</span></h4>
                        <p>Projects released</p>
                    </div>
                </div>
                <div className="counter-box-one">
                    <div className="counter-box-one-inner">
                        <div className="counter-icon">
                            <Image src="/assets/images/svg/counter-4.svg" alt="icon" width={50} height={50} />
                        </div>
                        <h4><span className="counter">1862 </span></h4>
                        <p>Satisfied clients</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default WhyChoose; 