'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import type { CategoryCreate } from '@/types/entities/category.type';

import { Button } from '@/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/ui/dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/ui/form';
import { Icon } from '@/ui/icon';
import { Input } from '@/ui/input';
import { Label } from '@/ui/label';
import { Textarea } from '@/ui/textarea';

import { categoriesService } from '@/services/api-services/categories/categories.service';

import {
  type NewCategoryFormSchema,
  newCategoryFormSchema,
} from './new-category-schema';

export const NewCategoryForm = () => {
  const client = useQueryClient();
  const form = useForm<NewCategoryFormSchema>({
    resolver: zodResolver(newCategoryFormSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (category: CategoryCreate) =>
      categoriesService.createCategory(category),
    onSuccess: (response) => {
      toast.success(response.message);
      client.invalidateQueries({ queryKey: ['categories'] });
      form.reset();
    },
  });

  const onSubmit = (categoryData: NewCategoryFormSchema) => {
    mutate(categoryData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Icon iconName="plus" />
          Додати
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Створення категорії</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="space-y-2">
                      <Label htmlFor="name">Назва</Label>
                      <Input id="name" {...field} />
                    </div>
                  </FormControl>
                  <FormDescription>Довжина 2-20 символів</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="space-y-2">
                      <Label htmlFor="description">Опис</Label>
                      <Textarea id="description" {...field} />
                    </div>
                  </FormControl>
                  <FormDescription>Довжина 20-120 символів</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Закрити
                </Button>
              </DialogClose>
              <Button disabled={isPending} type="submit">
                Додати
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
