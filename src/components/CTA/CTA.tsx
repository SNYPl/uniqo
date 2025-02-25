import React from 'react';
import Link from 'next/link';

const CTA = () => {
  return (
    <div className="cta-section-three">
        <div className="container">
            <div className="row">
                <div className="col-xl-8 col-lg-10 m-auto">
                    <div className="heading-box text-center">
                        <h2 className="heading-title animate fadeInUp wow" data-wow-duration="1500ms" data-wow-delay="200ms">
                            Sharing ideas and building brands that truly matter
                        </h2>
                    </div>
                    <Link href="/contact" className="btn btn-primary btn-theme animate fadeInUp wow" data-wow-duration="1500ms" data-wow-delay="400ms">
                        Get Started +
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
};

export default CTA; 