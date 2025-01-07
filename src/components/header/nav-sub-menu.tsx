'use client';

import Link from 'next/link';
import { toast } from 'sonner';

import { CategoryLink } from '@/components/category/category-link';
import { CategoryLinkListSkeleton } from '@/components/category/category-skeletons/category-link-list-skeleton';

import { useGetCategoriesQuery } from '@/hooks/queries-hooks/useGetCategoriesQuery';

import { getErrorMessage } from '@/helpers/errors/getErrorMessage';

import { mainRoutes } from '@/constants/pages.constant';

export const NavSubMenu = () => {
  const { data: categories, isPending, error } = useGetCategoriesQuery();

  if (isPending) return <CategoryLinkListSkeleton />;
  if (error) return toast.error(getErrorMessage(error));

  return (
    <ul className="grid w-[500px] lg:w-[750px] xl:w-[1000px] p-3 gap-1 lg:gap-2 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {categories.slice(0, 15).map((category) => (
        <li key={category.id}>
          <CategoryLink category={category} />
        </li>
      ))}
      <li>
        <Link
          className="h-full block select-none space-y-1 rounded-md p-3 text-sm font-medium leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          href={mainRoutes.search()}
        >
          Всі категорії
        </Link>
      </li>
    </ul>
  );
};
