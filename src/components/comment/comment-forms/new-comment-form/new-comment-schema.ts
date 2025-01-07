import { z } from 'zod';

export const newCommentFormSchema = z.object({
  comment: z
    .string()
    .min(1, "Це поле обов'язкове")
    .max(500, 'Коментар не може містити більше ніж 500 символів'),
});

export type NewCommentFormSchema = z.infer<typeof newCommentFormSchema>;
