import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Team = () => {
  return (
    <div className="team-section-one">
        <div className="container">
            <div className="row">
                <div className="col-xl-5 m-auto">
                    <div className="heading-box text-center">
                        <span className="sub-title animate fadeInUp wow" data-wow-duration="1500ms">Team</span>
                        <h2 className="heading-title animate fadeInUp wow" data-wow-duration="1500ms" data-wow-delay="200ms">Our Team of Dedicated Digital Professionals</h2>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center gutter-y-60">
                <div className="col-lg-4 col-md-6">
                    <div className="team-box-one animate fadeInUp wow" data-wow-duration="1500ms">
                        <div className="team-image-one">
                            <Link href="/team"><Image src="/assets/images/team/team-1.png" alt="team-image" width={400} height={400} /></Link>
                        </div>
                        <div className="team-details-one">
                            <h4><Link href="/team">Alex Jason</Link></h4>
                            <p>Finance consultant</p>
                        </div>
                        <ul className="team-social-media-one">
                            <li><Link href="https://www.facebook.com/"><Image src="/assets/images/svg/header/Fb.svg" alt="icon" width={24} height={24} /></Link></li>
                            <li><Link href="https://x.com/"><Image src="/assets/images/svg/header/Twiter.svg" alt="icon" width={24} height={24} /></Link></li>
                            <li><Link href="https://www.instagram.com/"><Image src="/assets/images/svg/header/Insta.svg" alt="icon" width={24} height={24} /></Link></li>
                            <li><Link href="https://www.pinterest.com/"><Image src="/assets/images/svg/header/Pintrest.svg" alt="icon" width={24} height={24} /></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="team-box-one animate fadeInUp wow" data-wow-duration="1500ms" data-wow-delay="400ms">
                        <div className="team-image-one">
                            <Link href="/team"><Image src="/assets/images/team/team-4.png" alt="team-image" width={400} height={400} /></Link>
                        </div>
                        <div className="team-details-one">
                            <h4><Link href="/team">Martin Doe</Link></h4>
                            <p>Sale Director</p>
                        </div>
                        <ul className="team-social-media-one">
                            <li><Link href="https://www.facebook.com/"><Image src="/assets/images/svg/header/Fb.svg" alt="icon" width={24} height={24} /></Link></li>
                            <li><Link href="https://x.com/"><Image src="/assets/images/svg/header/Twiter.svg" alt="icon" width={24} height={24} /></Link></li>
                            <li><Link href="https://www.instagram.com/"><Image src="/assets/images/svg/header/Insta.svg" alt="icon" width={24} height={24} /></Link></li>
                            <li><Link href="https://www.pinterest.com/"><Image src="/assets/images/svg/header/Pintrest.svg" alt="icon" width={24} height={24} /></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="team-box-one animate fadeInUp wow" data-wow-duration="1500ms" data-wow-delay="600ms">
                        <div className="team-image-one">
                            <Link href="/team"><Image src="/assets/images/team/team-3.png" alt="team-image" width={400} height={400} /></Link>
                        </div>
                        <div className="team-details-one">
                            <h4><Link href="/team">Richard Divas</Link></h4>
                            <p>Business Advisor</p>
                        </div>
                        <ul className="team-social-media-one">
                            <li><Link href="https://www.facebook.com/"><Image src="/assets/images/svg/header/Fb.svg" alt="icon" width={24} height={24} /></Link></li>
                            <li><Link href="https://x.com/"><Image src="/assets/images/svg/header/Twiter.svg" alt="icon" width={24} height={24} /></Link></li>
                            <li><Link href="https://www.instagram.com/"><Image src="/assets/images/svg/header/Insta.svg" alt="icon" width={24} height={24} /></Link></li>
                            <li><Link href="https://www.pinterest.com/"><Image src="/assets/images/svg/header/Pintrest.svg" alt="icon" width={24} height={24} /></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="team-box-one animate fadeInUp wow" data-wow-duration="1500ms" data-wow-delay="800ms">
                        <div className="team-image-one">
                            <Link href="/team"><Image src="/assets/images/team/team-5.png" alt="team-image" width={400} height={400} /></Link>
                        </div>
                        <div className="team-details-one">
                            <h4><Link href="/team">Monalis</Link></h4>
                            <p>Manager</p>
                        </div>
                        <ul className="team-social-media-one">
                            <li><Link href="https://www.facebook.com/"><Image src="/assets/images/svg/header/Fb.svg" alt="icon" width={24} height={24} /></Link></li>
                            <li><Link href="https://x.com/"><Image src="/assets/images/svg/header/Twiter.svg" alt="icon" width={24} height={24} /></Link></li>
                            <li><Link href="https://www.instagram.com/"><Image src="/assets/images/svg/header/Insta.svg" alt="icon" width={24} height={24} /></Link></li>
                            <li><Link href="https://www.pinterest.com/"><Image src="/assets/images/svg/header/Pintrest.svg" alt="icon" width={24} height={24} /></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="team-box-one animate fadeInUp wow" data-wow-duration="1500ms" data-wow-delay="1000ms">
                        <div className="team-image-one">
                            <Link href="/team"><Image src="/assets/images/team/team-2.png" alt="team-image" width={400} height={400} /></Link>
                        </div>
                        <div className="team-details-one">
                            <h4><Link href="/team">Sarah Hanley</Link></h4>
                            <p>Product Manager</p>
                        </div>
                        <ul className="team-social-media-one">
                            <li><Link href="https://www.facebook.com/"><Image src="/assets/images/svg/header/Fb.svg" alt="icon" width={24} height={24} /></Link></li>
                            <li><Link href="https://x.com/"><Image src="/assets/images/svg/header/Twiter.svg" alt="icon" width={24} height={24} /></Link></li>
                            <li><Link href="https://www.instagram.com/"><Image src="/assets/images/svg/header/Insta.svg" alt="icon" width={24} height={24} /></Link></li>
                            <li><Link href="https://www.pinterest.com/"><Image src="/assets/images/svg/header/Pintrest.svg" alt="icon" width={24} height={24} /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Team;