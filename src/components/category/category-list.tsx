'use client';

import { List } from '@/ui/list';

import { CategoryCard } from '@/components/category/category-card';

import { useGetCategoriesQuery } from '@/hooks/queries-hooks/useGetCategoriesQuery';

export const CategoryList = () => {
  const { data: categories, isPending, error } = useGetCategoriesQuery();

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <List
      className="grid @xl:grid-cols-2 @3xl:grid-cols-3"
      data={categories}
      renderItem={(category) => (
        <CategoryCard key={category.id} category={category} />
      )}
    />
  );
};
