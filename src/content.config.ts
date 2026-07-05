import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Colección "work": un .md por caso de estudio.
 * El cuerpo estructurado vive en frontmatter (sections[]) para poder
 * renderizar los componentes del sistema (findings, quests, chart, etc.).
 * Todo el contenido es DUMMY — ver README para sustituirlo.
 */
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    role: z.string(),
    period: z.string(),
    summary: z.string(),
    confidential: z.boolean().default(false),
    wip: z.boolean().default(false),
    order: z.number(),
    accent: z.enum(['orange', 'green', 'blue']).default('orange'),
    gradient: z.enum(['grad-mint', 'grad-blue', 'grad-orange', 'grad-green', 'grad-red']),
    tags: z.array(z.string()),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })).max(2),
    tldr: z.string().optional(),
    stats: z.array(z.object({ value: z.string(), label: z.string() })).optional(),
    sections: z.array(z.record(z.string(), z.any())).default([]),
  }),
});

export const collections = { work };
