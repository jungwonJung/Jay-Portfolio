export interface CareerItem {
  id: string;
  company: string;
  period: string;
  role: string;
  location: string;
  description: string;
  achievements: string[];
}

export const careerItems: CareerItem[] = [
  {
    id: 'telus-digital',
    company: 'Telus Digital',
    period: 'Oct 2024 — Present',
    role: 'Data Labeler',
    location: 'Krakow, Poland',
    description: 'Analyzed and categorized data sets to enhance machine learning algorithms. Currently transitioning to iOS development, actively learning Swift and SwiftUI to build native iOS applications.',
    achievements: [
      'Collaborated with team members to improve data accuracy (95%+) and labeling techniques',
      'Implemented quality control measures to ensure high standards in data labeling',
      'Utilized industry-standard tools for efficient data processing and management',
      'Trained new hires on data labeling processes and best practices',
      'Self-studying iOS development with Swift and SwiftUI to transition into mobile development',
    ],
  },
  {
    id: 'avelinix',
    company: 'Avelinix',
    period: 'May 2024 — Aug 2024',
    role: 'Full-Stack Development Intern',
    location: 'Krakow, Poland',
    description: 'Developed and maintained web applications using TypeScript, React, and NestJS.',
    achievements: [
      'Collaborated with cross-functional teams to design and implement new features',
      'Conducted testing and debugging to ensure optimal performance and user experience',
    ],
  },
  {
    id: 'flarelane',
    company: 'FlareLane',
    period: 'Sep 2021 — Jan 2023',
    role: 'Backend Developer',
    location: 'Seoul, Korea',
    description: 'Developed scalable backend systems and APIs, contributing to company growth.',
    achievements: [
      'Developed 30+ RESTful APIs, including a real-time payment API, improving transaction speed by 40%',
      'Integrated MySQL & MongoDB, reducing data retrieval time by 25%',
      'Implemented Elasticsearch, reducing search latency by 50%',
      'Increased test coverage from 17% to 82%, enhancing backend reliability',
      'Contributed to growth leading to $1M pre-Series A funding',
    ],
  },
  {
    id: 'shipda',
    company: 'Shipda',
    period: 'Mar 2021 — Aug 2021',
    role: 'Backend Intern',
    location: 'Seoul, Korea',
    description: 'Set up backend infrastructure and developed core REST APIs.',
    achievements: [
      'Set up backend server using NestJS and developed core REST APIs',
      'Built testing suite to ensure backend reliability',
    ],
  },
];

