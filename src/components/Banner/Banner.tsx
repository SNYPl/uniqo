
import Image from "next/image";

const Banner = () => {
    return (
        <div className="banner-section-one">
            <div className="banner-silder-one">
                <div className="banner-slide-item-one">
                    <div className="banner-image-one">
                        <Image src="/assets/images/background/home-landing-page.jpg" alt="banner-image" fill/>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-5 col-lg-8">
                                <div className="heading-box">
                                    <div className="banner-sub-title-one"><h2>New era of leadership</h2></div>
                                    <h1 className="heading-title">Develop Leadership <br />
                                        <span> through Science-Driven </span> <br />
                                        Solutions</h1>
                                    <p className="heading-details lead">Unleash the power of neuroscience in leadership to boost effectiveness and drive
                                    lasting resilience in your organization.</p>
                                    <a href="/about" className="btn btn-light btn-theme">View More +</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="banner-slide-item-one">
                    <div className="banner-image-one">
                        <Image src="/assets/images/background/banner-one-image-3.jpg" alt="banner-image"  fill/>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6">
                                <div className="heading-box">
                                    <div className="banner-sub-title-one"><h2>Tips for marketing <br /> & strategy</h2></div>
                                    <h1 className="heading-title">Unleash Innovation <br />
                                        <span>with Tailored</span> <br />
                                        Solutions</h1>
                                    <p className="heading-details lead">Leverage agile frameworks to provide a robust synopsis
                                        for high level overviews. Iterative approaches to collaborative .</p>
                                    <a href="/about" className="btn btn-light btn-theme">View More +</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-slide-item-one">
                    <div className="banner-image-one">
                        <Image src="/assets/images/background/banner-one-image-4.jpg" alt="banner-image" fill />
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6">
                                <div className="heading-box">
                                    <div className="banner-sub-title-one"><h2>Tips for marketing <br /> & strategy</h2></div>
                                    <h1 className="heading-title">Transform Ideas <br />
                                        <span>into Reality</span> <br />
                                        with Expertise</h1>
                                    <p className="heading-details lead">Leverage agile frameworks to provide a robust synopsis
                                        for high level overviews. Iterative approaches to collaborative .</p>
                                    <a href="/about" className="btn btn-light btn-theme">View More +</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            {/* <div id="slider-info"></div> */}
        </div>
    )
}

export default Banner;
