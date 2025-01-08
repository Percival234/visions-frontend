'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import type { PasswordUpdate } from '@/types/entities/user.type';

import { Button } from '@/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/ui/form';
import { PasswordInput } from '@/ui/input';
import { Label } from '@/ui/label';

import { authService } from '@/services/api-services/auth/auth.service';
import { usersService } from '@/services/api-services/users/users.service';

import {
  type NewPasswordFormSchema,
  newPasswordFormSchema,
} from './new-password-schema';

interface NewPasswordFormProps {
  userId: string;
}

export const NewPasswordForm = ({ userId }: NewPasswordFormProps) => {
  const client = useQueryClient();

  const form = useForm<NewPasswordFormSchema>({
    resolver: zodResolver(newPasswordFormSchema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (passwordData: PasswordUpdate) =>
      usersService.update(userId, passwordData),
    onSuccess: async (response) => {
      toast.success(response.message);
      await authService.logout();
      client.invalidateQueries({ queryKey: ['profile'] });
      form.reset();
    },
  });

  const onSubmit = ({
    newPassword,
    currentPassword,
  }: NewPasswordFormSchema) => {
    mutate({ newPassword, currentPassword });
  };

  return (
    <Form {...form}>
      <form className="w-80 space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="currentPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Поточний пароль</Label>
                  <PasswordInput
                    id="currentPassword"
                    type="password"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">Новий пароль</Label>
                  <PasswordInput id="newPassword" {...field} />
                </div>
              </FormControl>
              <FormDescription>Довжина 6-18 символів</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmNewPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="space-y-2">
                  <Label htmlFor="confirmNewPassword">
                    Підтвердження нового паролю
                  </Label>
                  <PasswordInput id="confirmNewPassword" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <Button disabled={isPending} type="submit" className="mt-2">
            Зберегти
          </Button>
        </div>
      </form>
    </Form>
  );
};

// TODO SET PASSWORD EYE AND TYPE INPUT "PASSWORD" in RESET-PASS LOGIN REGISTER AND NEW PASS
// TODO ALL FORM BUTTONS ADD SPIN ANIMATION AND SERVER ERROR HANDLER FOR MESSAGE
