'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/ui/form';
import { Icon } from '@/ui/icon';
import { Input } from '@/ui/input';

import { authService } from '@/services/api-services/auth/auth.service';
import type { AuthSignUp } from '@/services/api-services/auth/auth.service.types';

import { useAuthStore } from '@/store/useAuth.store';

const signUpFormSchema = z
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

type SignUpFormSchema = z.infer<typeof signUpFormSchema>;

export const SignUpForm = () => {
  const router = useRouter();
  const { setToken } = useAuthStore();
  const form = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (signUpData: AuthSignUp) => authService.signUp(signUpData),
    onSuccess: (response) => {
      setToken(response);
      router.refresh();
    },
  });

  function onSubmit({ email, password, username }: SignUpFormSchema) {
    mutate({ email, password, username });
  }

  return (
    <Form {...form}>
      <form className="w-80 grid" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormControl>
                <Input placeholder="Електронна адреса" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormControl>
                <Input placeholder="Нікнейм" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormControl>
                <Input type="password" placeholder="Пароль" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormControl>
                <Input
                  type="password"
                  placeholder="Підтвердження паролю"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          {isPending ? (
            <div className="flex items-center gap-2">
              <span className="animate-spin w-5 h-5 rounded-full border-[3px] border-solid border-background/50 border-r-background"></span>
              Обробка
            </div>
          ) : (
            <span>Зареєструватись</span>
          )}
        </Button>
        <div className="py-4 relative flex items-center justify-center">
          <div className="absolute bg-background px-2 leading-none text-sm text-muted-foreground">
            або
          </div>
          <hr className="h-[2px] bg-muted w-full" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline">
            <Icon iconName="google" />
          </Button>
          <Button variant="outline">
            <Icon className="text-blue-800" iconName="facebook" />
          </Button>
        </div>
      </form>
    </Form>
  );
};
