import glamourOne from '../assets/optimized/be_glamourous-1.webp';
import glamourTwo from '../assets/optimized/be_glamourous-2.webp';
import glamourThree from '../assets/optimized/be_glamourous-3.webp';
import standardImage from '../assets/optimized/standard-1.webp';
import spaceXImage from '../assets/optimized/spacex-1.webp';
import weatherImage from '../assets/optimized/weatherapp-1.webp';
import tomatoImage from '../assets/optimized/tomato_game-1.webp';

// Professional project details are taken from the supplied CV. Add public URLs and
// approved screenshots only after confirming the employer/client permits publication.
export const featuredProjects = [
  {
    id: 'yaya-agro',
    number: '01',
    name: 'Yaya Agro',
    eyebrow: 'PRODUCTION APPLICATION · ANDROID & IOS',
    type: 'mobile',
    summary: 'An agricultural advisory and marketplace app with authentication, content, dashboard experiences, and notifications.',
    contribution: 'Contributed reusable Flutter interfaces, REST API-driven flows, Provider state and error handling, and build/testing/release support for both app stores.',
    technologies: ['Flutter', 'Dart', 'Provider', 'REST APIs', 'FCM', 'Azure CI/CD'],
    visual: 'agro',
    visibility: 'Professional team project · store links pending',
  },
  {
    id: 'standard-industries',
    number: '02',
    name: 'Standard Industries',
    eyebrow: 'FREELANCE · MOBILE + WEB',
    type: 'mobile',
    summary: 'A receipt-printing mobile app and management system for field representatives, operational data, and reporting.',
    contribution: 'Built the Flutter and React experiences, connected them to Node.js/MySQL APIs, and implemented Google Maps-based representative tracking.',
    technologies: ['Flutter', 'Provider', 'React', 'Node.js', 'MySQL', 'Google Maps'],
    images: [{ src: standardImage, alt: 'Existing portfolio montage showing Standard Industries mobile login and administration portal' }],
    visibility: 'Freelance client project · private repository',
  },
  {
    id: 'dima-events',
    number: '03',
    name: 'Dima Events',
    eyebrow: 'FREELANCE · WEB APPLICATION',
    type: 'web',
    summary: 'Inventory and order management for event stock, incoming third-party items, allocations, and returns.',
    contribution: 'Developed the external inventory workflow, including partial allocations across orders, quantity returns, and clearer responsive dialogs and navigation.',
    technologies: ['React', 'JavaScript', 'Node.js', 'MySQL', 'REST APIs'],
    visual: 'inventory',
    visibility: 'Freelance client project · screenshots pending approval',
  },
  {
    id: 'be-glamourous',
    number: '04',
    name: 'Be Glamourous',
    eyebrow: 'FINAL YEAR RESEARCH · FLUTTER',
    type: 'mobile',
    summary: 'A mobile skincare experience that analyzes user-submitted selfies and offers personalized skincare recommendations.',
    contribution: 'Developed Flutter features with MVVM and Provider, including social and community functionality for user interaction and guidance.',
    technologies: ['Flutter', 'Dart', 'Provider', 'MVVM', 'Python', 'Node.js'],
    images: [
      { src: glamourOne, alt: 'Be Glamourous signup and login screen in a phone mockup' },
      { src: glamourTwo, alt: 'Be Glamourous selfie instructions, analysis score and social feed screens' },
      { src: glamourThree, alt: 'Be Glamourous selfie capture and skin analysis results screens' },
    ],
    url: 'https://github.com/rZoysa/BeGlamourous',
    urlLabel: 'View code on GitHub',
  },
];

export const additionalProjects = [
  {
    name: 'SpaceX Explorer',
    description: 'Flutter exploration app with SpaceX API data, rocket details, and custom animations.',
    technologies: ['Flutter', 'Dart', 'REST API'],
    image: spaceXImage,
    imageAlt: 'SpaceX Explorer original mobile application screenshot',
    url: 'https://github.com/rZoysa/SpaceX',
  },
  {
    name: 'Weather App',
    description: 'Cross-platform weather application using OpenWeatherMap forecasts and conditions.',
    technologies: ['Flutter', 'Dart', 'OpenWeatherMap'],
    image: weatherImage,
    imageAlt: 'Weather App original mobile application screenshot',
    url: 'https://github.com/rZoysa/weather_app',
  },
  {
    name: 'Tomato Math Game',
    description: 'Web-based math game with a Tomato API integration and a live leaderboard.',
    technologies: ['React', 'JavaScript', 'Firebase'],
    image: tomatoImage,
    imageAlt: 'Tomato Math Game original web application screenshot',
    url: 'https://github.com/rZoysa/Tomato-Game',
  },
];

export const skillGroups = [
  {
    number: '01',
    title: 'Mobile development',
    description: 'My primary focus: building and shipping cross-platform mobile experiences.',
    skills: ['Flutter', 'Dart', 'Provider', 'Firebase Cloud Messaging', 'Google Maps', 'Android / iOS releases'],
  },
  {
    number: '02',
    title: 'Frontend & design',
    description: 'Turning Figma designs and product requirements into responsive interfaces.',
    skills: ['React', 'JavaScript', 'Tailwind CSS', 'HTML / CSS', 'Figma', 'Responsive UI'],
  },
  {
    number: '03',
    title: 'Backend & data',
    description: 'Connecting experiences to reliable services and data flows.',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'MySQL', 'Firebase', 'API integration'],
  },
  {
    number: '04',
    title: 'Cloud & workflow',
    description: 'Supporting deployment, collaboration, and iterative delivery.',
    skills: ['Google Cloud', 'Cloud Run', 'GitHub Actions', 'Azure CI/CD', 'Git', 'Agile / Scrum'],
  },
];
