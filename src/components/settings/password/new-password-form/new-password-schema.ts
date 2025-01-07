import { z } from 'zod';

export const newPasswordFormSchema = z
  .object({
    currentPassword: z.string().min(1, "Це поле обов'язкове"),
    newPassword: z
      .string()
      .min(8, 'Мінімальна довжина 8 символів')
      .max(16, 'Максимальна довжина 16 символів'),
    confirmNewPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: 'Паролі не співпадають',
    path: ['confirmNewPassword'],
  });

export type NewPasswordFormSchema = z.infer<typeof newPasswordFormSchema>;
