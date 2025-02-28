import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ServiceBoxProps {
  title: string;
  iconSrc: string;
  IconComponent: React.ComponentType;
  id: string;
  delay?: number;
}

const ServiceBox: React.FC<ServiceBoxProps> = ({
  title,
  iconSrc,
  IconComponent,
  delay = 0,
  id,
}) => {
  return (
    <div
      className="service-box-one animate fadeInUp wow"
      data-wow-duration="1500ms"
      data-wow-delay={delay ? `${delay}ms` : undefined}
    >
      <Image src={iconSrc} alt="icon" width={100} height={100} />
      <div className="service-icon-one">
        <IconComponent />
      </div>
      <h4>{title}</h4>
      <Link href={`/service/${id}`} className="service-btn-one">
        <i className="fa-solid fa-angle-right"></i>
      </Link>
    </div>
  );
};

export default ServiceBox;
