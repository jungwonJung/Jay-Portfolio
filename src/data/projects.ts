export interface Project {
  id: string;
  name: string;
  imageSrc: string;
  imageAlt: string;
  shortDescription: string;
  description: string;
  highlights: string[];
  links: Array<{ label: string; url: string }>;
  technologies: string[];
  appStoreUrl?: string;
  githubUrl?: string;
  appIcon?: string;
}

export const projects: Project[] = [
  {
    id: 'parkinpl',
    name: 'PARKinPL',
    imageSrc: '/assets/PARKinPL.png',
    imageAlt: 'Screens of PARKinPL iOS parking zone app',
    shortDescription: 'Native iOS app that helps drivers instantly find parking zones and rates in major Polish cities.',
    description: 'PARKinPL is a native UIKit-based iOS app that helps users find the correct parking zone and rates in major Polish cities. It uses GPS and MapKit for real-time zone detection, shows accurate parking prices and operating hours, and supports six cities including Warsaw, Kraków, Wrocław, Katowice, Łódź, and Pszczyna. All location processing happens locally on-device with no backend or network calls, so the app works fully offline once installed.',
    highlights: [
      'Real-time parking zone detection using GPS and MapKit.',
      'Accurate pricing and operating hours for 6 major Polish cities.',
      'Built with UIKit and works fully offline with 100% on-device processing.',
      'Released on the App Store with no ads, accounts, or subscriptions.',
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/jungwonJung/PARKinPL' },
      { label: 'App Store', url: 'https://apps.apple.com/us/app/parkinpl/id6756267697' },
    ],
    technologies: ['Swift', 'UIKit', 'CoreLocation', 'MapKit', 'MVVM'],
    appStoreUrl: 'https://apps.apple.com/us/app/parkinpl/id6756267697',
    githubUrl: 'https://github.com/jungwonJung/PARKinPL',
    appIcon: '/assets/PARKinPL.png',
  },
  {
    id: 'sounddesign-api',
    name: 'SoundDesign-API',
    imageSrc: '/assets/PARKinPL.png',
    imageAlt: 'SoundDesign-API project',
    shortDescription: 'API project for sound design',
    description: 'A comprehensive API project for sound design applications.',
    highlights: [
      'RESTful API design',
      'Scalable architecture',
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/jungwonJung' },
    ],
    technologies: ['NestJS', 'TypeScript', 'PostgreSQL'],
  },
  {
    id: 'shoppy',
    name: 'Shoppy',
    imageSrc: '/assets/PARKinPL.png',
    imageAlt: 'Shoppy project',
    shortDescription: 'E-commerce application',
    description: 'A modern e-commerce application with shopping cart functionality.',
    highlights: [
      'Shopping cart implementation',
      'User authentication',
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/jungwonJung' },
    ],
    technologies: ['React', 'TypeScript', 'Node.js'],
  },
  {
    id: 'jay-ddit',
    name: 'Jay-ddit',
    imageSrc: '/assets/PARKinPL.png',
    imageAlt: 'Jay-ddit project',
    shortDescription: 'Reddit-like social platform',
    description: 'A social platform inspired by Reddit with posts and comments.',
    highlights: [
      'Real-time updates',
      'User interactions',
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/jungwonJung' },
    ],
    technologies: ['React', 'NestJS', 'MongoDB'],
  },
];

