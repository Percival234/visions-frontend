import type { Category } from '@/types/entities/category.type';

import { Button } from '@/ui/button';

interface ClubCategoryTagProps {
  category: Category;
}

export const ClubCategoryTag = ({
  category: { id, name },
}: ClubCategoryTagProps) => {
  return (
    <Button
      variant="link"
      size="sm"
      asChild
      className="bg-black/50 text-white rounded-md text-sm py-1.5 px-2.5 backdrop-blur-sm"
      key={id}
    >
      {name}
    </Button>
  );
};
