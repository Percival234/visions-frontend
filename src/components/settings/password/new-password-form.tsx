'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/ui/form';
import { Input } from '@/ui/input';
import { Label } from '@/ui/label';

const formSchema = z
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

type NewPasswordFormSchema = z.infer<typeof formSchema>;

export const NewPasswordForm = () => {
  const form = useForm<NewPasswordFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
  });

  const { formState, handleSubmit, control } = form;
  const { isSubmitting } = formState;

  function onSubmit(values: NewPasswordFormSchema) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form className="w-80 space-y-2" onSubmit={handleSubmit(onSubmit)}>
        <FormField
          control={control}
          name="currentPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Поточний пароль</Label>
                  <Input id="currentPassword" type="password" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">Новий пароль</Label>
                  <Input id="newPassword" type="password" {...field} />
                </div>
              </FormControl>
              <FormDescription>Довжина 6-18 символів</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="confirmNewPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="space-y-2">
                  <Label htmlFor="confirmNewPassword">
                    Підтвердження нового паролю
                  </Label>
                  <Input id="confirmNewPassword" type="password" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <Button type="submit" className="mt-2">
            Зберегти
          </Button>
        </div>
      </form>
    </Form>
  );
};

// TODO SET PASSWORD EYE AND TYPE INPUT "PASSWORD" in RESET-PASS LOGIN REGISTER AND NEW PASS
// TODO ALL FORM BUTTONS ADD SPIN ANIMATION AND SERVER ERROR HANDLER FOR MESSAGE
