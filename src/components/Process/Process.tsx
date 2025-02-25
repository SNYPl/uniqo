import React from 'react';
import Image from 'next/image';

const Process = () => {
  return (
    <div className="process-section-one">
        <div className="container">
            <div className="heading-box">
                <span className="sub-title animate fadeInUp wow" data-wow-duration="1500ms">Process</span>
                <h2 className="heading-title animate fadeInUp wow" data-wow-duration="1500ms" data-wow-delay="200ms">How does it Work ?</h2>
            </div>
            <div className="process-inner-one">
                <div className="process-box-one animate fadeInRight wow" data-wow-duration="2000ms">
                    <Image src="/assets/images/process/process-1.png" alt="image" width={500} height={500} />
                    <div className="process-icon-one">
                        <Image src="/assets/images/svg/process/people.svg" alt="icon" width={50} height={50} />
                    </div>
                    <h4><span>01 . </span>People</h4>
                    <p className="lead">We guarantee to provide affordable business consulting solutions that help you
                        reduce</p>
                </div>
                <div className="process-box-one animate fadeInRight wow" data-wow-duration="2000ms" data-wow-delay="400ms">
                    <Image src="/assets/images/process/process-1.png" alt="image" width={500} height={500} />
                    <div className="process-icon-one">
                        <Image src="/assets/images/svg/process/strategies.svg" alt="icon" width={50} height={50} />
                    </div>
                    <h4><span>02 . </span>Strategies</h4>
                    <p className="lead">Our solutions are scalable and can grow with your business, ensuring get most.</p>
                </div>
                <div className="process-box-one animate fadeInRight wow" data-wow-duration="2000ms" data-wow-delay="600ms">
                    <Image src="/assets/images/process/process-1.png" alt="image" width={500} height={500} />
                    <div className="process-icon-one">
                        <Image src="/assets/images/svg/process/analysis.svg" alt="icon" width={50} height={50} />
                    </div>
                    <h4><span>03 . </span>Analysis</h4>
                    <p className="lead">We specialize in serving specific industries, such as healthcare, finance, or
                        manufacturing</p>
                </div>
                <div className="process-box-one animate fadeInRight wow" data-wow-duration="2000ms" data-wow-delay="800ms">
                    <Image src="/assets/images/process/process-1.png" alt="image" width={500} height={500} />
                    <div className="process-icon-one">
                        <Image src="/assets/images/svg/process/cooperation.svg" alt="icon" width={50} height={50} />
                    </div>
                    <h4><span>04 . </span>Cooperation</h4>
                    <p className="lead">We embarked on our journey with a distinct approach. Instead of adhering.</p>
                </div>
                <div className="process-box-one animate fadeInRight wow" data-wow-duration="2000ms" data-wow-delay="1000ms">
                    <Image src="/assets/images/process/process-1.png" alt="image" width={500} height={500} />
                    <div className="process-icon-one">
                        <Image src="/assets/images/svg/process/statistics.svg" alt="icon" width={50} height={50} />
                    </div>
                    <h4><span>05 . </span>Statistics</h4>
                    <p className="lead">We guarantee to provide affordable business consulting solutions that help you
                        reduce</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Process; 