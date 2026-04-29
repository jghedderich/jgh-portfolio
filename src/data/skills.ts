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
    name: 'Angular',
    image: getTechAsset('angular')!,
    type: 'frontend',
    url: 'https://angular.dev/',
  },
  {
    name: 'Next',
    image: getTechAsset('next')!,
    type: 'frontend',
    url: 'https://nextjs.org/',
  },
  {
    name: 'TanStack Query',
    image: getTechAsset('query')!,
    type: 'frontend',
    url: 'https://tanstack.com/query/latest',
  },
  {
    name: 'Jest',
    image: getTechAsset('jest')!,
    type: 'tools',
    url: 'https://jestjs.io/',
  },
  {
    name: 'MongoDB',
    image: getTechAsset('mongo')!,
    type: 'backend',
    url: 'https://www.mongodb.com/',
  },
  {
    name: '.NET',
    image: getTechAsset('dotnet')!,
    type: 'backend',
    url: 'https://dotnet.microsoft.com/',
  },
  {
    name: 'Playwright',
    image: getTechAsset('playwright')!,
    type: 'tools',
    url: 'https://playwright.dev/',
  },
  {
    name: 'Tailwind',
    image: getTechAsset('tailwind')!,
    type: 'frontend',
    url: 'https://tailwindcss.com/',
  },
  {
    name: 'TypeScript',
    image: getTechAsset('typescript')!,
    type: 'tools',
    url: 'https://www.typescriptlang.org/',
  },
  {
    name: 'LangChain',
    image: getTechAsset('langchain')!,
    type: 'tools',
    url: 'https://www.langchain.com/',
  },
  {
    name: 'Expo',
    image: getTechAsset('expo')!,
    type: 'frontend',
    url: 'https://expo.dev/',
  },
  {
    name: 'Docker',
    image: getTechAsset('docker')!,
    type: 'tools',
    url: 'https://www.docker.com/',
  },
  {
    name: 'Cloudflare Vectorize',
    image: getTechAsset('cloudflare')!,
    type: 'tools',
    url: 'https://developers.cloudflare.com/vectorize/',
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
    type: 'frontend',
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
    name: 'FastAPI',
    image: getTechAsset('FastAPI')!,
    type: 'backend',
    url: 'https://fastapi.tiangolo.com/',
  },
  {
    name: 'Node.js',
    image: getTechAsset('node')!,
    type: 'backend',
    url: 'https://nodejs.org/',
  },
];
