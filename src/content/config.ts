import { z, defineCollection } from "astro:content";

const blogSchema = ({ image }) =>
  z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date(),
    heroImage: image().refine((img) => img.width >= 800, {
      message: "Cover image must be at least 800 pixels wide!",
    }),
    badge: z.string().optional(),
    tags: z
      .array(z.string())
      .refine((items) => new Set(items).size === items.length, {
        message: "tags must be unique",
      })
      .optional(),
  });

const projectsSchema = ({ image }) =>
  z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date(),
    heroImage: image().refine((img) => img.width >= 800, {
      message: "Cover image must be at least 800 pixels wide!",
    }),
    badge: z.string().optional(),
    tags: z
      .array(z.string())
      .refine((items) => new Set(items).size === items.length, {
        message: "tags must be unique",
      })
      .optional(),
  });

export type BlogSchema = z.infer<typeof blogSchema>;
export type ProjectsSchema = z.infer<typeof projectsSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const projectsCollection = defineCollection({ schema: projectsSchema });

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
};
