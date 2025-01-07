import Link from 'next/link';

import type { Category } from '@/types/entities/category.type';

import { mainRoutes } from '@/constants/pages.constant';

interface CategoryLinkProps {
  category: Category;
}

export const CategoryLink = ({
  category: { id, name, description },
}: CategoryLinkProps) => {
  return (
    <Link href={`${mainRoutes.search()}?category=${id}`}>
      <div className="h-full block select-none space-y-1 rounded-md p-3 outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
        <div className="text-sm font-medium leading-none">{name}</div>
        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
          {description}
        </p>
      </div>
    </Link>
  );
};
