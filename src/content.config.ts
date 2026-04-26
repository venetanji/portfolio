import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    summary: z.string().optional(),
    date: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    weight: z.number().optional(),
    tags: z.array(z.string()).optional(),
    image: z
      .union([
        z.string(),
        z.object({
          filename: z.string().optional(),
          focal_point: z.string().optional(),
          preview_only: z.boolean().optional(),
        }),
      ])
      .optional(),
    links: z
      .array(z.object({ name: z.string(), url: z.string() }))
      .optional(),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/publications" }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()).optional(),
    author_notes: z.array(z.string()).optional(),
    publication: z.string().optional(),
    publication_types: z.array(z.string()).optional(),
    date: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    url_pdf: z.string().optional(),
    doi: z.string().optional(),
    abstract: z.string().optional(),
    image: z
      .union([
        z.string(),
        z.object({
          filename: z.string().optional(),
          focal_point: z.string().optional(),
          preview_only: z.boolean().optional(),
        }),
      ])
      .optional(),
  }),
});

export const collections = { projects, publications };
