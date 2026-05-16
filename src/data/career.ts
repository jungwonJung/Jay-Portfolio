export interface CareerItem {
  id: string;
  company: string;
  period: string;
  role: string;
  location: string;
  description: string;
  descriptionBullets?: string[]; // Optional bullet points for description
  achievements: string[];
}

export const careerItems: CareerItem[] = [
  {
    id: 'telus-digital',
    company: 'Telus Digital',
    period: 'Oct 2024 — Present',
    role: 'Data QA Analyst',
    location: 'Kraków, Poland',
    description: 'Ensuring data quality for ML model training while independently building and shipping iOS applications to the App Store.',
    descriptionBullets: [
      'Reviewing and validating complex datasets to ensure quality and accuracy for Machine Learning model training.',
      'Applying systematic QA processes and quality control standards to improve data reliability.',
      'Independently developing and shipping native iOS applications to the App Store outside of work hours.',
    ],
    achievements: [
      'Maintained 95%+ data accuracy rates through rigorous quality control processes',
      'Trained new hires on QA workflows and data validation best practices',
      'Shipped 3 iOS apps to the App Store independently while working full-time',
      'Built PARKinPL, Challengers, and Dev60s — all live and available to real users',
    ],
  },
  {
    id: 'avelinix',
    company: 'Avelinix',
    period: 'May 2024 — Aug 2024',
    role: 'Full-Stack Developer Intern',
    location: 'Kraków, Poland',
    description: 'Built full-stack web features using TypeScript, React, and NestJS in a product-focused startup environment.',
    descriptionBullets: [
      'Developed and maintained responsive web application features using TypeScript and React.',
      'Built and maintained RESTful API endpoints with NestJS for core product functionality.',
      'Worked across the full stack — from UI components to database queries — in a fast-moving team.',
    ],
    achievements: [
      'Implemented end-to-end features across React frontend and NestJS backend',
      'Contributed to production codebase within the first week of onboarding',
      'Gained hands-on experience with TypeScript in a real product environment',
    ],
  },
  {
    id: 'flarelane',
    company: 'FlareLane',
    period: 'Sep 2021 — Jan 2023',
    role: 'Backend Developer',
    location: 'Seoul, Korea',
    description: 'Developed scalable backend systems and APIs, contributing to company growth.',
    descriptionBullets: [
      'Architected scalable backend systems to support rapid user growth and high traffic.',
      'Designed and optimized RESTful APIs, improving data processing efficiency.',
      'Enhanced system stability and contributed to core business logic development.',
    ],
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
    descriptionBullets: [
      'Set up foundational backend infrastructure, prioritizing security and reliability.',
      'Developed core REST APIs to support essential platform functionalities.',
      'Gained hands-on experience in API documentation and system workflow design.',
    ],
    achievements: [
      'Set up backend server using NestJS and developed core REST APIs',
      'Built testing suite to ensure backend reliability',
    ],
  },
];

