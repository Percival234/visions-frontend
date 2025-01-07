import { z } from 'zod';

export const newNotificationFormSchema = z.object({
  textMarkdown: z
    .string()
    .min(20, 'Текст повідомлення має містити щонайменше 20 символів'),
});

export type NewNotificationFormSchema = z.infer<
  typeof newNotificationFormSchema
>;
