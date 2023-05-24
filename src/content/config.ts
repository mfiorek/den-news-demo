import { defineCollection, z } from 'astro:content';

const newsletterCollection = defineCollection({
	schema: z.object({
		competence: z.string(),
        draft: z.boolean(),
		edition: z.string(),
		date: z.string(),
		imgSrc: z.string(),
	}),
});

export const collections = {
    newsletter: newsletterCollection
};
