import Link from 'next/link';

import type { Category } from '@/types/entities/category.type';

import { mainRoutes } from '@/constants/pages.constant';

interface PostCategoryTagProps {
  category: Category;
}

export const PostCategoryTag = ({
  category: { id, name },
}: PostCategoryTagProps) => {
  return (
    <Link
      href={`${mainRoutes.search()}?categories=${id}`}
      className="bg-black/50 text-white/90 rounded-md text-xs xl:text-sm py-1.5 px-2.5 backdrop-blur-sm"
      key={id}
    >
      {name}
    </Link>
  );
};
