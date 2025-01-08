import type { Metadata } from 'next';

import { Separator } from '@/ui/separator';
import { Title } from '@/ui/title';

import { NewCategoryForm } from '@/components/category/category-forms/new-category-form/new-category-form';
import { CategoryList } from '@/components/category/category-list';

export const metadata: Metadata = {
  title: 'Категорії',
};

export default function Page() {
  return (
    <>
      <div className="flex items-center justify-between gap-2">
        <Title size="h2">Категорії</Title>
        <NewCategoryForm />
      </div>
      <Separator />
      <CategoryList />
    </>
  );
}
