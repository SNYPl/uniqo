import React from 'react';
import { BusinessIcon, LearningIcon, MotivationIcon } from '../components/WhyChoose/icons';

type SkillData = {
  icon: React.ReactElement;
  title: string;
  points: string[];
  position: 'left' | 'right';
  delay: number;
};

export const SKILLS_DATA: SkillData[] = [
  {
    icon: <BusinessIcon />,
    title: 'Decision Making and High Performance',
    points: [
      'Leadership Psychology: Behavioral patterns & emotional intelligence',
      'Biological explanations for high-performance leadership',
      'Evidence-based approaches for optimal brain function',
      'SCARF model implementation for enhanced motivation'
    ],
    position: 'left',
    delay: 200
  },
  {
    icon: <LearningIcon />,
    title: 'Learning Efficiency and Memory',
    points: [
      'Brain-optimized learning processes',
      'Personalized learning paths aligned with neuroscience',
      'Micro-learning & spaced learning techniques',
      'Enhanced knowledge retention through active recall'
    ],
    position: 'right',
    delay: 400
  },
  {
    icon: <MotivationIcon />,
    title: 'Motivation and Stress Management',
    points: [
      'Neurochemical techniques for engagement',
      'Understanding brain chemistry effects on motivation',
      'Creating psychologically safe environments',
      'Empathetic leadership through neuroscience'
    ],
    position: 'left',
    delay: 600
  }
]; 