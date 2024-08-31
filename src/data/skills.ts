import type { Skill } from '../types/skill';
import {
  astroIcon,
  bootstrapIcon,
  cssIcon,
  expressIcon,
  flutterIcon,
  graphqlIcon,
  htmlIcon,
  jestIcon,
  nestIcon,
  nextIcon,
  nodeIcon,
  reactIcon,
  tailwindIcon,
  typescriptIcon,
} from './icons';

export const skills: Skill[] = [
  {
    name: 'React',
    image: reactIcon,
    type: 'frontend',
    url: 'https://reactjs.org/',
  },
  {
    name: 'Next',
    image: nextIcon,
    type: 'frontend',
    url: 'https://nextjs.org/',
  },
  {
    name: 'Jest',
    image: jestIcon,
    type: 'learning',
    url: 'https://jestjs.io/',
  },
  {
    name: 'Tailwind',
    image: tailwindIcon,
    type: 'learning',
    url: 'https://tailwindcss.com/',
  },
  {
    name: 'TypeScript',
    image: typescriptIcon,
    type: 'learning',
    url: 'https://www.typescriptlang.org/',
  },
  {
    name: 'Flutter',
    image: flutterIcon,
    type: 'frontend',
    url: 'https://flutter.dev/',
  },
  {
    name: 'GraphQL',
    image: graphqlIcon,
    type: 'frontend',
    url: 'https://graphql.org/',
  },
  {
    name: 'CSS',
    image: cssIcon,
    type: 'frontend',
    url: 'https://www.w3.org/Style/CSS/',
  },
  {
    name: 'HTML',
    image: htmlIcon,
    type: 'frontend',
    url: 'https://www.w3.org/html/',
  },
  {
    name: 'Astro',
    image: astroIcon,
    type: 'learning',
    url: 'https://astro.build/',
  },
  {
    name: 'Bootstrap',
    image: bootstrapIcon,
    type: 'frontend',
    url: 'https://getbootstrap.com/',
  },
  {
    name: 'Express',
    image: expressIcon,
    type: 'backend',
    url: 'https://expressjs.com/',
  },
  {
    name: 'Nest',
    image: nestIcon,
    type: 'backend',
    url: 'https://nestjs.com/',
  },
  {
    name: 'Node.js',
    image: nodeIcon,
    type: 'backend',
    url: 'https://nodejs.org/',
  },
];
