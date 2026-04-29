import type { ImageMetadata } from 'astro';

type SvgModule = { default: ImageMetadata };

const svgModules = import.meta.glob<SvgModule>('../assets/*.svg', { eager: true });

function baseNameFromPath(path: string): string {
  const file = path.split('/').pop() ?? path;
  return file.replace(/\.svg$/i, '');
}

/**
 * Map of `{ baseFileName -> ImageMetadata }` for every `src/assets/*.svg`.
 * Keys are stored both as-is and lowercased to allow case-insensitive lookup.
 */
export const TECH_ASSETS: Readonly<Record<string, ImageMetadata>> = (() => {
  const out: Record<string, ImageMetadata> = {};

  for (const [path, mod] of Object.entries(svgModules)) {
    const base = baseNameFromPath(path);
    out[base] = mod.default;
    out[base.toLowerCase()] = mod.default;
  }

  return out;
})();

function normalizeTechName(name: string): string {
  return name.trim();
}

/**
 * Display-name aliases (as used in content/frontmatter) to icon base filenames.
 * Keep this small; prefer normalizing the data upstream when possible.
 */
const TECH_NAME_TO_ASSET_BASE: Record<string, string> = {
  Astro: 'astro',
  Angular: 'angular',
  'TanStack Query': 'query',
  'Next.js': 'next',
  Next: 'next',
  React: 'react',
  'React.js': 'react',
  Redux: 'redux',
  Bootstrap: 'bootstrap',
  Tailwind: 'tailwind',
  'Tailwind CSS': 'tailwind',
  'Tailwind.css': 'tailwind',
  TypeScript: 'typescript',
  JavaScript: 'javascript',
  Expo: 'expo',
  Flutter: 'flutter',
  '.NET Core': 'dotnet',
  Docker: 'docker',
  'Nest.js': 'nest',
  NestJS: 'nest',
  'Node.js': 'node',
  MongoDB: 'mongo',
  'Express.js': 'express',
  Express: 'express',
  PostgreSQL: 'postgresql',
  Postgres: 'postgresql',
  GraphQL: 'graphql',
  Elixir: 'elixir',
  LangChain: 'langchain',
  'Cloudflare Vectorize': 'cloudflare',
  FastAPI: 'FastAPI',
};

export function getTechAsset(baseFileName: string): ImageMetadata | undefined {
  const key = baseFileName.trim();
  return TECH_ASSETS[key] ?? TECH_ASSETS[key.toLowerCase()];
}

export function getTechIcon(displayName: string): ImageMetadata | undefined {
  const name = normalizeTechName(displayName);
  const base = TECH_NAME_TO_ASSET_BASE[name] ?? name;
  return getTechAsset(base);
}

