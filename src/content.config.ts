import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.mdx' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      description: z.string(),
      /** Higher values appear first in lists */
      order: z.number().optional(),
      url: z.string().optional(),
      thumbnail: image(),
      hero: image(),
      repoLinks: z
        .array(
          z.object({
            title: z.string(),
            href: z.string(),
          }),
        )
        .default([]),
      tech: z.object({
        frontend: z.array(z.string()),
        backend: z.array(z.string()),
      }),
    }),
});

export const collections = { projects };
