'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { Button } from '@/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/ui/form';
import { Icon } from '@/ui/icon';
import { Input, PasswordInput } from '@/ui/input';
import { SubmitButton } from '@/ui/submit-button';

import { authService } from '@/services/api-services/auth/auth.service';
import type { AuthSignUp } from '@/services/api-services/auth/auth.service.types';

import { useAuthStore } from '@/store/useAuth.store';

import { type SignUpFormSchema, signUpFormSchema } from './sign-up-schema';

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

  const onSubmit = ({ email, password, username }: SignUpFormSchema) => {
    mutate({ email, password, username });
  };

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
                <PasswordInput placeholder="Пароль" {...field} />
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
                <PasswordInput placeholder="Підтвердження паролю" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton submittingText="Підтвердження" disabled={isPending}>
          Зареєструватись
        </SubmitButton>
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
