import { z } from 'zod';

export const newCategoryFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Мінімальна довжина символів 2')
    .max(20, 'Максимальна довжина 20 символів'),
  description: z
    .string()
    .min(20, 'Мінімальна довжина 20 символів')
    .max(120, 'Максимальна довжина 120 символів'),
});

export type NewCategoryFormSchema = z.infer<typeof newCategoryFormSchema>;
