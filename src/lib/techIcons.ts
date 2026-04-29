import type { ImageMetadata } from 'astro';

import {
  astroIcon,
  bootstrapIcon,
  dockerIcon,
  dotNetIcon,
  elixirIcon,
  expoIcon,
  expressIcon,
  flutterIcon,
  graphqlIcon,
  mongoIcon,
  nestIcon,
  nextIcon,
  nodeIcon,
  postgresIcon,
  reactIcon,
  reduxIcon,
  tailwindIcon,
  typescriptIcon,
  angularIcon,
  queryIcon,
} from '../data/icons';

/** Map display names (as used in project frontmatter) to icon assets */
const TECH_ICONS: Record<string, ImageMetadata> = {
  Astro: astroIcon,
  Angular: angularIcon,
  'TanStack Query': queryIcon,
  'Next.js': nextIcon,
  Next: nextIcon,
  React: reactIcon,
  'React.js': reactIcon,
  Redux: reduxIcon,
  Bootstrap: bootstrapIcon,
  Tailwind: tailwindIcon,
  'Tailwind CSS': tailwindIcon,
  'Tailwind.css': tailwindIcon,
  TypeScript: typescriptIcon,
  Expo: expoIcon,
  Flutter: flutterIcon,
  '.NET Core': dotNetIcon,
  Docker: dockerIcon,
  'Nest.js': nestIcon,
  NestJS: nestIcon,
  'Node.js': nodeIcon,
  MongoDB: mongoIcon,
  'Express.js': expressIcon,
  PostgreSQL: postgresIcon,
  Postgres: postgresIcon,
  GraphQL: graphqlIcon,
  Elixir: elixirIcon,
};

export function getTechIcon(name: string): ImageMetadata | undefined {
  return TECH_ICONS[name];
}
