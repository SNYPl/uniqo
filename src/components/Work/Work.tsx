import React from 'react';
import Link from 'next/link';

const Work = () => {
  return (
    <div className="work-section-one">
        <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-lg-5">
                    <div className="work-left-one">
                        <div className="heading-box">
                            <span className="sub-title animate fadeInUp wow" data-wow-duration="1500ms">work</span>
                            <h2 className="heading-title animate fadeInUp wow" data-wow-duration="1500ms" data-wow-delay="200ms">Have a view of our amazing Workflow</h2>
                        </div>
                        <div className="work-details-one animate fadeInUp wow" data-wow-duration="1500ms" data-wow-delay="400ms">
                            <p className="lead-lg">At uniquo, we are a renowned global consulting firm committed to
                                collaborating with business .</p>
                            <p className="lead">At uniquo, we are a renowned global consulting firm committed to
                                collaborating with business and societal leaders in overcoming their most critical
                                challenges and seizing their greatest opportunities.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="work-right-one">
                        <div className="work-btn"><Link href="/contact" className="btn btn-primary btn-theme">Get Started <span>+</span></Link></div>
                        <div className="work-process-one animate fadeInRight wow" data-wow-duration="1500ms">
                            <div className="work-process-title">
                                <p>Business Analysis</p>
                                <p className="work-process-text">68%</p>
                            </div>
                            <div className="work-processing"><span></span></div>
                        </div>
                        <div className="work-process-one animate fadeInRight wow" data-wow-duration="1500ms" data-wow-delay="200ms">
                            <div className="work-process-title">
                                <p>Financial Reporting</p>
                                <p className="work-process-text">85%</p>
                            </div>
                            <div className="work-processing"><span></span></div>
                        </div>
                        <div className="work-process-one animate fadeInRight wow" data-wow-duration="1500ms" data-wow-delay="400ms">
                            <div className="work-process-title">
                                <p>Investment Analysis</p>
                                <p className="work-process-text">56%</p>
                            </div>
                            <div className="work-processing"><span></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Work; 