import type { Category } from '@/types/entities/category.type';

import { List } from '@/ui/list';

import { PostCategoryTag } from '@/components/category/post-category-tag';

interface PostCategoryListProps {
  categories: Category[];
}

export const PostCategoryList = ({ categories }: PostCategoryListProps) => {
  return (
    <List
      className="gap-1 md:gap-2 content-end flex-wrap"
      data={categories}
      renderItem={(category) => (
        <PostCategoryTag key={category.id} category={category} />
      )}
      EmptyComponent={null}
    />
  );
};
