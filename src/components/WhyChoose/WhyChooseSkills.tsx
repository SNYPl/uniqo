import React from 'react';
import SkillCard from './SkillCard';
import { SKILLS_DATA } from '@/data/skill-data';


const WhyChooseSkills = () => {
  return (
    <div className="why-choose-section-two about-why-choose">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="heading-box light text-center">
              <span className="sub-title animate fadeInUp wow" data-wow-duration="1500ms">
                Neuroscience in Leadership
              </span>
              <h2 className="heading-title animate fadeInUp wow" data-wow-duration="1500ms" data-wow-delay="200ms">
                Understanding the <span>Brain-Based Leadership</span>
              </h2>
              <p className="intro-text animate fadeInUp wow" data-wow-duration="1500ms" data-wow-delay="300ms">
                Established in 2006, Neuroscience of Leadership studies how the brain functions in leadership processes,
                influencing behaviors and developing effective leadership skills through understanding brain processes.
              </p>
            </div>
          </div>
        </div>

        <div className="row align-items-center mt-5">
          {SKILLS_DATA.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              points={skill.points}
              position={skill.position}
              delay={skill.delay}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSkills; 