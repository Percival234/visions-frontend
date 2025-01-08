import { z } from 'zod';

export const signUpFormSchema = z
  .object({
    email: z
      .string()
      .min(1, "Це поле обов'язкове")
      .email('Недійсна електронна адреса'),
    username: z
      .string()
      .min(5, 'Мінімальна довжина 5 символів')
      .max(20, 'Максимальна довжина 20 символів'),
    password: z
      .string()
      .min(8, 'Мінімальна довжина 8 символів')
      .max(16, 'Максимальна довжина 16 символів'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Паролі не співпадають',
    path: ['confirmPassword'],
  });

export type SignUpFormSchema = z.infer<typeof signUpFormSchema>;
