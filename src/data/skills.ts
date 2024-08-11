import type { Skill } from '../types/skill';
import {
  astroIcon,
  bootstrapIcon,
  cssIcon,
  dockerIcon,
  elixirIcon,
  expressIcon,
  flutterIcon,
  graphqlIcon,
  htmlIcon,
  jestIcon,
  mongoIcon,
  nestIcon,
  nextIcon,
  nodeIcon,
  postgresIcon,
  reactIcon,
  tailwindIcon,
  typescriptIcon,
} from './icons';

export const skills: Skill[] = [
  {
    name: 'React',
    image: reactIcon,
    type: 'frontend',
  },
  {
    name: 'Next',
    image: nextIcon,
    type: 'frontend',
  },
  {
    name: 'Jest',
    image: jestIcon,
    type: 'learning',
  },
  {
    name: 'Tailwind',
    image: tailwindIcon,
    type: 'learning',
  },
  {
    name: 'TypeScript',
    image: typescriptIcon,
    type: 'learning',
  },
  {
    name: 'Docker',
    image: dockerIcon,
    type: 'learning',
  },
  {
    name: 'Flutter',
    image: flutterIcon,
    type: 'frontend',
  },
  {
    name: 'Elixir',
    image: elixirIcon,
    type: 'learning',
  },
  {
    name: 'GraphQL',
    image: graphqlIcon,
    type: 'frontend',
  },
  {
    name: 'CSS',
    image: cssIcon,
    type: 'frontend',
  },
  {
    name: 'HTML',
    image: htmlIcon,
    type: 'frontend',
  },
  {
    name: 'Astro',
    image: astroIcon,
    type: 'learning',
  },
  {
    name: 'Bootstrap',
    image: bootstrapIcon,
    type: 'frontend',
  },
  {
    name: 'Express',
    image: expressIcon,
    type: 'backend',
  },
  {
    name: 'Nest',
    image: nestIcon,
    type: 'backend',
  },
  {
    name: 'MongoDB',
    image: mongoIcon,
    type: 'backend',
  },
  {
    name: 'PostgreSQL',
    image: postgresIcon,
    type: 'backend',
  },
  {
    name: 'Node.js',
    image: nodeIcon,
    type: 'backend',
  },
];
