import { z } from 'zod';

export const signInFormSchema = z.object({
  email: z.string().email('Недійсна електронна адреса'),
  password: z.string().min(1, "Це поле обов'язкове"),
});

export type SignInFormSchema = z.infer<typeof signInFormSchema>;
