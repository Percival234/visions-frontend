'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import type { NotificationCreate } from '@/types/entities/notification.type';
import type { Report } from '@/types/entities/report.type';

import { Button } from '@/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/ui/form';
import { Textarea } from '@/ui/textarea';

import { notificationsService } from '@/services/api-services/notifications/notifications.service';

import {
  type NewNotificationFormSchema,
  newNotificationFormSchema,
} from './report-notification-schema';

interface NewNotificationFormProps {
  user: Report['user'];
}

export const ReportNotificationForm = ({ user }: NewNotificationFormProps) => {
  const form = useForm<NewNotificationFormSchema>({
    resolver: zodResolver(newNotificationFormSchema),
    defaultValues: {
      textMarkdown: '',
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (notificationData: NotificationCreate) =>
      notificationsService.create(notificationData),
    onSuccess: (response) => {
      toast.success(response.message);
      form.reset();
    },
  });

  const onSubmit = ({ textMarkdown }: NewNotificationFormSchema) => {
    mutate({ textMarkdown, userId: user.id, title: 'Технічна підтримка' });
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-3"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="textMarkdown"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  className="w-full"
                  placeholder={`Відповісти ${user.username}`}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button type="submit" disabled={isPending}>
            Надіслати
          </Button>
        </div>
      </form>
    </Form>
  );
};
