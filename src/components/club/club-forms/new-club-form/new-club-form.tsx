'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { Avatar, AvatarImage } from '@/ui/avatar';
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
import { Textarea } from '@/ui/textarea';

import { ClubCategoryCheckbox } from '@/components/category/club-category-checkbox';
import {
  type NewClubFormSchema,
  newClubFormSchema,
} from '@/components/club/club-forms/new-club-form/new-club-schema';

import { clubsService } from '@/services/api-services/clubs/clubs.service';

import { useGetCategoriesQuery } from '@/hooks/queries-hooks/useGetCategoriesQuery';

import { clubsRoutes } from '@/constants/pages.constant';

export const NewClubForm = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [checkedCategories, setCheckedCategories] = useState<Set<string>>(
    new Set(),
  );
  const { data: categories } = useGetCategoriesQuery();

  const form = useForm<NewClubFormSchema>({
    resolver: zodResolver(newClubFormSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (clubData: FormData) => clubsService.createClub(clubData),
    onSuccess: (club) => {
      queryClient.setQueryData(['clubs', club.id], club);
      toast.success('Клуб створено');
      router.replace(clubsRoutes.clubId(club.id));
    },
  });

  const onSubmit = ({ name, description, image }: NewClubFormSchema) => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('categoriesIds', JSON.stringify([...checkedCategories]));
    mutate(formData);
  };

  return (
    <Form {...form}>
      <form
        className="space-y-6 max-w-3xl"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="space-y-3">
          {imagePreview && (
            <Avatar size="xl">
              <AvatarImage src={imagePreview} alt="Зображення нового клубу" />
            </Avatar>
          )}
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="space-y-2">
                    <Label htmlFor="image">Зображення</Label>
                    <Input
                      className="max-w-80"
                      accept="image/jpeg, image/jpg, image/avif"
                      type="file"
                      id="image"
                      placeholder="Додайте зображення клубу"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          field.onChange(file);

                          const reader = new FileReader();

                          reader.onload = () => {
                            setImagePreview(reader.result as string);
                          };

                          reader.readAsDataURL(file);
                        }
                      }}
                      onBlur={field.onBlur}
                      ref={field.ref}
                    />
                  </div>
                </FormControl>
                <FormDescription>
                  Не більше 10мб. Формати jpeg, jpg, avif.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="space-y-2 max-w-80">
                  <Label htmlFor="name">Назва клубу</Label>
                  <Input id="name" placeholder="Назва клубу" {...field} />
                </div>
              </FormControl>
              <FormDescription>
                Назва має містити від 3 до 30 символів
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <div className="space-y-2">
                  <Label htmlFor="description">Опис</Label>
                  <Textarea
                    id="description"
                    className="w-full flex-1"
                    placeholder="Додайте опис вашого клубу"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormDescription>Не більше 1000 символів</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-y-3 col-span-2">
          <Label>Категорії</Label>
          <div className="flex flex-wrap gap-2">
            {categories?.map((category) => (
              <ClubCategoryCheckbox
                key={category.id}
                category={category}
                checkedCategories={checkedCategories}
                setCheckedCategories={setCheckedCategories}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="destructive" asChild>
            <Link href={clubsRoutes.clubs()}>Скасувати</Link>
          </Button>
          <Button type="submit" disabled={isPending}>
            Створити
          </Button>
        </div>
      </form>
    </Form>
  );
};
