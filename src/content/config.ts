import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    time: z.string(),
    source: z.string(),
    link: z.string().url(),
    image: z.string().optional(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  posts: postsCollection,
};
