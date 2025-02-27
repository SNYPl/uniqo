import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Breadcrumb {
  label: string;
  link: string;
}

interface PageBannerProps {
  title: string;
  description?: string;
  breadcrumb: Breadcrumb[];
  backgroundImage: string ;
}

const PageBanner = ({ title, description, breadcrumb, backgroundImage }: PageBannerProps) => {
 

  return (
    <div className="page-header-section" >
        <div className="container">
        <div className="banner-image-one">
                        <Image src={backgroundImage} alt="banner-image" fill/>
                    </div>
            <div className="row">
                <div className="col-xl-6 col-lg-8">
                    <div className="page-header-heading animate fadeInLeft wow" data-wow-duration="2000ms">
                        <h2>{title}</h2>
                        {description && <p className="lead">{description}</p>}
                    </div>
                </div>
            </div>
            <ul className="breadcrumb">
                {breadcrumb.map((item, index) => (
                    <React.Fragment key={index}>
                        <li>
                            <Link href={item.link}>{item.label}</Link>
                        </li>
                        {index < breadcrumb.length - 1 && (
                            <li>
                                <Image src="/assets/images/about/arrow-brudcrumb.svg" alt="icon" width={20} height={20} />
                            </li>
                        )}
                    </React.Fragment>
                ))}
            </ul>
        </div>
    </div>
  );
};

export default PageBanner; 