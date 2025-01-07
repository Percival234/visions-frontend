'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import type { Category, CategoryUpdate } from '@/types/entities/category.type';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/ui/alert-dialog';
import { Button } from '@/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/ui/card';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
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
import { Input } from '@/ui/input';
import { Label } from '@/ui/label';
import { Textarea } from '@/ui/textarea';

import { categoriesService } from '@/services/api-services/categories/categories.service';

const updateCategoryFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Мінімальна довжина символів 2')
    .max(20, 'Максимальна довжина 20 символів'),
  description: z
    .string()
    .min(20, 'Мінімальна довжина 20 символів')
    .max(120, 'Максимальна довжина 120 символів'),
});

type ChangeCategoryFormSchema = z.infer<typeof updateCategoryFormSchema>;

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard = ({
  category: { id, name, description },
}: CategoryCardProps) => {
  const client = useQueryClient();
  const form = useForm<ChangeCategoryFormSchema>({
    resolver: zodResolver(updateCategoryFormSchema),
    defaultValues: {
      name,
      description,
    },
  });

  const { mutate: update, isPending: isPendingUpdate } = useMutation({
    mutationFn: (category: CategoryUpdate) =>
      categoriesService.updateCategory(id, category),
    onSuccess: (response) => {
      toast.success(response.message);
      client.invalidateQueries({ queryKey: ['categories'] });
    },
  });

  const { mutate: remove, isPending: isPendingDelete } = useMutation({
    mutationFn: () => categoriesService.deleteCategory(id),
    onSuccess: (response) => {
      toast.success(response.message);
      client.invalidateQueries({ queryKey: ['categories'] });
    },
  });

  const onSubmit = (categoryData: ChangeCategoryFormSchema) => {
    update(categoryData);
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm">Змінити</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Редагувати категорію</DialogTitle>
              <DialogDescription>
                Натисніть &quot;зберегти&quot; коли завершите.
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form
                className="space-y-2"
                onSubmit={form.handleSubmit(onSubmit)}
              >
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
                  <Button disabled={isPendingUpdate} type="submit">
                    Змінити
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button size="sm" variant="destructive">
              Видалити
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Ви абослютно впевнені?</AlertDialogTitle>
              <AlertDialogDescription>
                Цю дію не можна буде відмінити. Категорію буде видалено та
                прибрано із зображень.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Скасувати</AlertDialogCancel>
              <AlertDialogAction
                disabled={isPendingDelete}
                onClick={() => remove()}
              >
                Продовжити
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardFooter>
    </Card>
  );
};
