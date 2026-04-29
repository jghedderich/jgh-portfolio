import type { Skill } from '../types/skill';
import { getTechAsset } from '../lib/tech-icons';

export const skills: Skill[] = [
  {
    name: 'React',
    image: getTechAsset('react')!,
    type: 'frontend',
    url: 'https://reactjs.org/',
  },
  {
    name: 'Next',
    image: getTechAsset('next')!,
    type: 'frontend',
    url: 'https://nextjs.org/',
  },
  {
    name: 'Jest',
    image: getTechAsset('jest')!,
    type: 'learning',
    url: 'https://jestjs.io/',
  },
  {
    name: 'Playwright',
    image: getTechAsset('playwright')!,
    type: 'learning',
    url: 'https://playwright.dev/',
  },
  {
    name: 'Tailwind',
    image: getTechAsset('tailwind')!,
    type: 'learning',
    url: 'https://tailwindcss.com/',
  },
  {
    name: 'TypeScript',
    image: getTechAsset('typescript')!,
    type: 'learning',
    url: 'https://www.typescriptlang.org/',
  },
  {
    name: 'Flutter',
    image: getTechAsset('flutter')!,
    type: 'frontend',
    url: 'https://flutter.dev/',
  },
  {
    name: 'GraphQL',
    image: getTechAsset('graphql')!,
    type: 'frontend',
    url: 'https://graphql.org/',
  },
  {
    name: 'CSS',
    image: getTechAsset('css')!,
    type: 'frontend',
    url: 'https://www.w3.org/Style/CSS/',
  },
  {
    name: 'HTML',
    image: getTechAsset('html')!,
    type: 'frontend',
    url: 'https://www.w3.org/html/',
  },
  {
    name: 'Astro',
    image: getTechAsset('astro')!,
    type: 'learning',
    url: 'https://astro.build/',
  },
  {
    name: 'Bootstrap',
    image: getTechAsset('bootstrap')!,
    type: 'frontend',
    url: 'https://getbootstrap.com/',
  },
  {
    name: 'Express',
    image: getTechAsset('express')!,
    type: 'backend',
    url: 'https://expressjs.com/',
  },
  {
    name: 'Nest',
    image: getTechAsset('nest')!,
    type: 'backend',
    url: 'https://nestjs.com/',
  },
  {
    name: 'Node.js',
    image: getTechAsset('node')!,
    type: 'backend',
    url: 'https://nodejs.org/',
  },
];
