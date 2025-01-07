'use client';

import { Title } from '@/ui/title';

import { CategoryFiltrationCheckbox } from '@/components/filtration/category-filtration-checkbox';

import { useGetCategoriesQuery } from '@/hooks/queries-hooks/useGetCategoriesQuery';

export const CategoryFiltration = () => {
  const { data: categories, isPending, error } = useGetCategoriesQuery();

  if (isPending) return 'loading';
  if (error) return 'error';

  return (
    <div className="space-y-2">
      <Title>Категорії</Title>
      <div className="flex flex-wrap gap-2 p-1">
        {categories.map((category) => (
          <CategoryFiltrationCheckbox category={category} key={category.id} />
        ))}
      </div>
    </div>
  );
};
