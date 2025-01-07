import { z } from 'zod';

import { ReportTypes } from '@/types/enums/report-types.enum';

export const newReportFormSchema = z.object({
  text: z
    .string()
    .min(20, 'Звіт має містити щонайменше 20 символів')
    .max(500, 'Звіт має містити не більше 500 символів'),
  type: z
    .nativeEnum(ReportTypes)
    .refine(
      (value) => Object.values(ReportTypes).includes(value as ReportTypes),
      { message: 'Невірний тип звіту, виберіть коректний варіант.' },
    ),
});

export type NewReportFormSchema = z.infer<typeof newReportFormSchema>;
