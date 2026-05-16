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
    shortDescription: 'Native iOS app for finding parking zones and rates across major Polish cities — built for the local market.',
    description: 'PARKinPL is a native UIKit-based iOS app built specifically for drivers navigating Poland\'s paid parking zones. It uses GPS and MapKit for real-time zone detection, displays accurate parking prices and operating hours for 6 major cities, and runs 100% on-device with no backend, no internet required, and no user data collected.',
    descriptionBullets: [
      'Built specifically for the Polish market — covering Warsaw, Kraków, Wrocław, Katowice, Łódź, and Pszczyna.',
      'Real-time parking zone detection using GPS and MapKit — fully offline after install.',
      '100% on-device processing: no backend, no network calls, no user data collected.',
      'Privacy-first: no ads, no accounts, no tracking — just the information drivers need.',
      'Live on the App Store.',
    ],
    highlights: [
      'Real-time GPS zone detection — know exactly which zone you\'re in, instantly.',
      'Accurate pricing and hours for 6 major Polish cities.',
      'Fully offline: works anywhere, no signal required.',
      'Zero privacy compromises — no ads, no accounts, no subscriptions.',
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
    id: 'challengers',
    name: 'Challengers',
    imageSrc: '/assets/Challengers.png',
    imageAlt: 'Screens of Challengers iOS challenge app',
    shortDescription: 'Social challenge app — create and join goals with friends. Live on the App Store.',
    description: 'Challengers is an iOS app that lets users create and join challenges with friends. I lead both development and design in a small team, building the full product from onboarding to live data — shipped and available on the App Store. Built with SwiftUI + Combine using MVVM architecture, with Firebase powering real-time data management.',
    descriptionBullets: [
      'Led full development and design — from concept to App Store release.',
      'Real-time challenge creation and tracking with friends.',
      'SwiftUI + Combine with MVVM for clean, scalable state management.',
      'Firebase backend for live data sync across users.',
      'Live on the App Store.',
    ],
    highlights: [
      'End-to-end ownership: design, architecture, development, and release.',
      'Onboarding, challenge creation, and history flows with strong UX focus.',
      'MVVM + Combine for reactive, testable architecture.',
      'Firebase-backed real-time data — live for real users.',
    ],
    links: [
      { label: 'App Store', url: 'https://apps.apple.com/pl/app/challlengers/id6758675338' },
    ],
    technologies: ['Swift', 'SwiftUI', 'Combine', 'Firebase', 'MVVM'],
    appStoreUrl: 'https://apps.apple.com/pl/app/challlengers/id6758675338',
    appIcon: '/assets/Challengers.png',
  },
  {
    id: 'dev60s',
    name: 'Dev60s',
    imageSrc: '/assets/Dev60s.png',
    imageAlt: 'Screens of Dev60s iOS interview quiz app',
    shortDescription: 'iOS quiz app for developers — 60-second technical interview challenges. Live on the App Store.',
    description: 'Dev60s is an iOS quiz app that helps developers prepare for technical interviews through 60-second time-boxed questions. It covers Swift, iOS development, computer science fundamentals, algorithms, and data structures — with multiple difficulty levels, flexible session lengths, real-time haptic feedback, and a detailed results breakdown.',
    descriptionBullets: [
      '60-second timer per question with optional strict mode to simulate real interview pressure.',
      'Categories: Swift, iOS development, CS fundamentals, algorithms, and data structures.',
      'Three difficulty levels (Easy / Normal / Hard) with 20, 30, or 40-question sessions.',
      'Real-time answer feedback with haptics and animations.',
      'Detailed results breakdown showing weak areas and incorrect answers.',
    ],
    highlights: [
      'Time-boxed 60-second challenges that simulate real interview pressure.',
      'Flexible session setup with difficulty levels and question counts.',
      'Haptics and polished SwiftUI animations for a premium feel.',
      'Comprehensive results to identify and improve weak areas.',
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
];

