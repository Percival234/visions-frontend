import type { Category } from '@/types/entities/category.type';

import { List } from '@/ui/list';

import { ClubCategoryTag } from '@/components/category/club-category-tag';

interface ClubCategoryListProps {
  categories: Category[];
}

export const ClubCategoryList = ({ categories }: ClubCategoryListProps) => {
  return (
    <List
      className="lg:gap-2.5"
      data={categories}
      renderItem={(category) => (
        <ClubCategoryTag key={category.id} category={category} />
      )}
      EmptyComponent={null}
    />
  );
};
