'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
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
import { Icon } from '@/ui/icon';
import { Input, PasswordInput } from '@/ui/input';

import { authService } from '@/services/api-services/auth/auth.service';
import type { AuthSignIn } from '@/services/api-services/auth/auth.service.types';

import { useAuthStore } from '@/store/useAuth.store';

import { authRoutes } from '@/constants/pages.constant';

const signInFormSchema = z.object({
  email: z.string().email('Недійсна електронна адреса'),
  password: z.string().min(1, "Це поле обов'язкове"),
});

type SignInFormSchema = z.infer<typeof signInFormSchema>;

export const SignInForm = () => {
  const { setToken } = useAuthStore();
  const router = useRouter();
  const form = useForm<SignInFormSchema>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (signInData: AuthSignIn) => authService.signIn(signInData),
    onSuccess: (response) => {
      setToken(response);
      router.push('/search');
    },
  });

  const onSubmit = (values: SignInFormSchema) => mutate(values);

  // TODO винести схеми окремо

  return (
    <Form {...form}>
      <form
        className="max-w-80 w-full grid"
        onSubmit={form.handleSubmit(onSubmit)}
      >
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
          name="password"
          render={({ field }) => (
            <FormItem className="mb-3">
              <FormControl>
                <PasswordInput placeholder="Пароль" {...field} />
              </FormControl>
              <FormMessage />
              <FormDescription>
                <Link
                  className="hover:underline active:underline focus:underline"
                  href={authRoutes.passReset()}
                >
                  Забули пароль?
                </Link>
              </FormDescription>
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
            <span>Вхід</span>
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
