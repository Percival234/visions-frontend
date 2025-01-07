import { z } from 'zod';

export const newClubFormSchema = z.object({
  name: z
    .string()
    .min(3, 'Назва має містити щонайменше 3 символів')
    .max(30, 'Назва має містити не більше 30 символів'),
  description: z.string().max(1000, 'Опис має містити не більше 1000 символів'),
  image: z
    .any()
    .refine((file) => file != null, {
      message: 'Відсутнє зображення клубу',
    })
    .refine(
      (file) => {
        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/avif'];
        return allowedTypes.includes(file?.type);
      },
      {
        message: 'Допустимі формати зображень: JPEG, JPG, AVIF',
      },
    )
    .refine((file) => file?.type?.startsWith('image/'), {
      message: 'Файл повинен бути зображенням',
    })
    .refine((file) => file?.size <= 10 * 1024 * 1024, {
      message: 'Розмір файлу повинен бути менше 10MB',
    }),
});

export type NewClubFormSchema = z.infer<typeof newClubFormSchema>;

// TODO синхронізувати повідомлення валідації з сервером та розмір картинок валідувати шо тут шо на сервері
