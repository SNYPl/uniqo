import React from 'react';

interface SkillCardProps {
  icon: React.ReactElement;
  title: string;
  points: string[];
  position: 'left' | 'right';
  delay?: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, points, position, delay = 200 }) => {
  const animationClass = position === 'left' ? 'fadeInLeft' : 'fadeInRight';

  return (
    <>
      {position === 'right' && <div className="col-lg-6 d-none d-lg-block"></div>}
      <div className="col-lg-6">
        <div className={`why-choose-box-two animate ${animationClass} wow`} data-wow-duration="1500ms" data-wow-delay={`${delay}ms`}>
          <div className="why-choose-icon-two">
            {icon}
          </div>
          <h4>{title}</h4>
          <ul className="feature-list">
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
      {position === 'left' && <div className="col-lg-6 d-none d-lg-block"></div>}
    </>
  );
};

export default SkillCard; 