export interface Project {
  id: string;
  name: string;
  imageSrc: string;
  imageAlt: string;
  shortDescription: string;
  description: string;
  descriptionBullets?: string[]; // Optional bullet points for description
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
    descriptionBullets: [
      'Native iOS app built entirely with UIKit.',
      'Real-time parking zone detection in major Polish cities.',
      'Fully offline functionality with 100% on-device processing.',
      'Privacy-first design: No ads, no accounts, no tracking.',
      'Available on the App Store for a seamless user experience.',
    ],
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
    id: 'dev60s',
    name: 'Dev60s',
    imageSrc: '/assets/Dev60s.png',
    imageAlt: 'Screens of Dev60s iOS interview quiz app',
    shortDescription: 'Premium iOS quiz app for developers preparing for technical interviews with 60-second challenges.',
    description: 'Dev60s is a premium iOS quiz app that helps developers prepare for technical interviews through time-boxed 60-second questions. It covers Swift, iOS development, computer science, algorithms, and data structures with multiple difficulty levels and flexible session lengths, delivering instant feedback and detailed results in a polished SwiftUI experience.',
    descriptionBullets: [
      '60-second timer per question with optional strict mode.',
      'Multiple categories: Swift, iOS development, CS fundamentals, algorithms, and data structures.',
      'Difficulty levels: Easy, Normal, Hard with 20/30/40-question sessions.',
      'Real-time answer feedback with haptics and animations.',
      'Detailed results with performance messaging and incorrect answers list.',
    ],
    highlights: [
      'Time-boxed 60-second challenges that simulate interview pressure.',
      'Flexible session setup with difficulty levels and question counts.',
      'Real-time feedback with haptics and polished SwiftUI animations.',
      'Comprehensive results breakdown to improve weak areas.',
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/jungwonJung/Dev60s' },
      { label: 'App Store', url: 'https://apps.apple.com/pl/app/dev60s/id6757722658' },
    ],
    technologies: ['Swift', 'SwiftUI', 'UIKit', 'Combine', 'MVVM'],
    appStoreUrl: 'https://apps.apple.com/pl/app/dev60s/id6757722658',
    githubUrl: 'https://github.com/jungwonJung/Dev60s',
    appIcon: '/assets/Dev60s.png',
  },
  {
    id: 'challengers',
    name: 'Challengers',
    imageSrc: '/assets/Challengers.png',
    imageAlt: 'Screens of Challengers iOS challenge app',
    shortDescription: 'Social challenge app for friends with warm, iOS-grouped UI and MVVM architecture.',
    description: 'Challengers is an iOS app that lets users create and join challenges with friends. I am leading both development and design in a small team project, with an MVP targeted for February 2026 and App Store release planned after. It uses SwiftUI + Combine with MVVM, and real data is managed through Firebase.',
    descriptionBullets: [
      'Team project where I lead both development and design.',
      'MVP planned for February 2026, App Store release after completion.',
      'Uses SwiftUI + Combine with MVVM for clean state management.',
      'Firebase is used for real-time data management.',
      'Commercial project in progress; source code and store links are not public.',
    ],
    highlights: [
      'Create and join challenges with friends using a warm, iOS grouped UI style.',
      'Onboarding, challenge creation, and history flows with strong UX focus.',
      'MVVM architecture with Combine and global state injection.',
      'Firebase-backed data for live challenge management.',
    ],
    links: [],
    technologies: ['Swift', 'SwiftUI', 'Combine', 'Firebase', 'MVVM'],
    appIcon: '/assets/Challengers.png',
  },
];

