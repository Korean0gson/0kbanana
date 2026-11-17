import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const homepage = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    links: z.array(z.object({
      label: z.string(),
      url: z.string()
    })).optional()
  })
});

export const collections = { homepage };
