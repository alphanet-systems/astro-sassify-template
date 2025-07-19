import { defineCollection, z } from 'astro:content';

const propertiesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    images: z.array(z.string()),
  }),
});

export const collections = {
  'properties': propertiesCollection,
};
