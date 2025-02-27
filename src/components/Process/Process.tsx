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
                    <Image src="/assets/images/process/process-background.png" alt="image" width={500} height={500} />
                    <div className="process-icon-one">
                        <Image src="/assets/images/svg/process/people.svg" alt="icon" width={50} height={50} />
                    </div>
                    <h4><span>01 . </span>Analysis</h4>
                    <p className="lead">Our team, which involves high-profile neuroscientists, analyzes the company’s neuroleadership
                    readiness.</p>
                </div>
                <div className="process-box-one animate fadeInRight wow" data-wow-duration="2000ms" data-wow-delay="400ms">
                    <Image src="/assets/images/process/process-background.png" alt="image" width={500} height={500} />
                    <div className="process-icon-one">
                        <Image src="/assets/images/svg/process/strategies.svg" alt="icon" width={50} height={50} />
                    </div>
                    <h4><span>02 . </span>Awareness Building</h4>
                    <p className="lead">We conduct workshops for various levels of management to raise awareness around
                    neuroleadership.</p>
                </div>
                <div className="process-box-one animate fadeInRight wow" data-wow-duration="2000ms" data-wow-delay="600ms">
                    <Image src="/assets/images/process/process-background.png" alt="image" width={500} height={500} />
                    <div className="process-icon-one">
                        <Image src="/assets/images/svg/process/analysis.svg" alt="icon" width={50} height={50} />
                    </div>
                    <h4><span>03 . </span>Development Program</h4>
                    <p className="lead">Based on the analysis results, we tailor our consulting models to meet the client’s needs and
                    prepare different levels of management for neuro transformation.</p>
                </div>
                <div className="process-box-one animate fadeInRight wow" data-wow-duration="2000ms" data-wow-delay="800ms">
                    <Image src="/assets/images/process/process-background.png" alt="image" width={500} height={500} />
                    <div className="process-icon-one">
                        <Image src="/assets/images/svg/process/cooperation.svg" alt="icon" width={50} height={50} />
                    </div>
                    <h4><span>04 . </span>Transformation</h4>
                    <p className="lead">We assist top management in integrating neuroleadership principles into the organizational
                    development strategy and subsequently implementing them within the organization.</p>
                </div>
                <div className="process-box-one animate fadeInRight wow" data-wow-duration="2000ms" data-wow-delay="1000ms">
                    <Image src="/assets/images/process/process-background.png" alt="image" width={500} height={500} />
                    <div className="process-icon-one">
                        <Image src="/assets/images/svg/process/statistics.svg" alt="icon" width={50} height={50} />
                    </div>
                    <h4><span>05 . </span>Outcomes</h4>
                    <p className="lead">After completing the service, we analyze the change in neuroleadership readiness levels among
                    program participants.</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Process; 