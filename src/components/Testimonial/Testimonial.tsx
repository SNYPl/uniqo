import React from 'react';
import Image from 'next/image';

const Testimonial = () => {
  return (
    <div className="testimonial-section-one">
        <div className="container">
            <div className="heading-box text-center">
                <span className="sub-title">our client say</span>
            </div>
            <div className="row">
                <div className="col-lg-8 m-auto">
                    <div className="testimonial-slider-one">
                        <div className="testimonial-item-one">
                            <div className="testimonial-author-image">
                                <Image src="/assets/images/testimonial/testimonial-1.png" alt="author-image" width={500} height={500} />
                            </div>
                            <h5>Vulputate mi sit amet mauris commodo quis imperdiet. Metus vulputate eu felis imperdiet
                                proin nulla aliquet enim.</h5>
                            <Image src="/assets/images/svg/cote.svg" alt="icon" width={50} height={50} />
                            <p>John Doue , Digital marketing</p>
                        </div>
                        <div className="testimonial-item-one">
                            <div className="testimonial-author-image">
                                <Image src="/assets/images/testimonial/testimonial-2.png" alt="author-image" width={500} height={500} />
                            </div>
                            <h5>Vulputate mi sit amet mauris commodo quis imperdiet. Metus vulputate eu felis imperdiet
                                proin nulla aliquet enim.</h5>
                            <Image src="/assets/images/svg/cote.svg" alt="icon" width={50} height={50} />
                            <p>Neil Patel , Social Media Marketing</p>
                        </div>
                        <div className="testimonial-item-one">
                            <div className="testimonial-author-image">
                                <Image src="/assets/images/testimonial/testimonial-3.png" alt="author-image" width={500} height={500} />
                            </div>
                            <h5>Vulputate mi sit amet mauris commodo quis imperdiet. Metus vulputate eu felis imperdiet
                                proin nulla aliquet enim.</h5>
                            <Image src="/assets/images/svg/cote.svg" alt="icon" width={50} height={50} />
                            <p>Rand Fishkin , Content Marketing</p>
                        </div>
                        <div className="testimonial-item-one">
                            <div className="testimonial-author-image">
                                <Image src="/assets/images/testimonial/testimonial-4.png" alt="author-image" width={500} height={500} />
                            </div>
                            <h5>Vulputate mi sit amet mauris commodo quis imperdiet. Metus vulputate eu felis imperdiet
                                proin nulla aliquet enim.</h5>
                            <Image src="/assets/images/svg/cote.svg" alt="icon" width={50} height={50} />
                            <p>Mari Smith , SEO</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Testimonial; 