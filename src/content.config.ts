import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    role: z.string(),
    period: z.string(),
    summary: z.string(),
    category: z.string(),          // p.ej. 'B2C', 'B2B', '0-1' (usado como Tag)
    confidential: z.boolean().default(false),
    cover: z.string(),             // ruta a placeholder/imagen
    coverRatio: z.string().default('16/9'),
    order: z.number().default(0),  // orden de listado
  }),
});

export const collections = { work };
