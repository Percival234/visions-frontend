'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import type { ReportCreate } from '@/types/entities/report.type';
import { ReportTypes, reportTypes } from '@/types/enums/report-types.enum';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Title } from '@/components/ui/title';

import { reportsService } from '@/services/api-services/reports/reports.service';

import {
  type NewReportFormSchema,
  newReportFormSchema,
} from './new-report-schema';

export const NewReportForm = () => {
  const form = useForm<NewReportFormSchema>({
    resolver: zodResolver(newReportFormSchema),
    defaultValues: {
      text: '',
      type: ReportTypes.Other,
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (reportData: ReportCreate) => reportsService.create(reportData),
    onSuccess: (response) => {
      toast.success(response.message);
      form.reset();
    },
  });

  const onSubmit = (values: NewReportFormSchema) => mutate(values);

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-3 max-w-[600px]"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3 mb-4">
              <Title size="h5">Виберіть тип:</Title>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  {reportTypes.map((type) => (
                    <FormItem
                      key={type}
                      className="flex items-center space-x-3 space-y-0"
                    >
                      <FormControl>
                        <RadioGroupItem value={type} />
                      </FormControl>
                      <FormLabel>{type}</FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Textarea
                  className="w-full flex-1"
                  placeholder="Опишіть проблему"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <Button type="submit" disabled={isPending}>
            Надіслати
          </Button>
        </div>
      </form>
    </Form>
  );
};
