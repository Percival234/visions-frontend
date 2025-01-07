'use client';

import type { CheckedState } from '@radix-ui/react-checkbox';

import type { Category } from '@/types/entities/category.type';

import { CheckboxButton } from '@/ui/checkbox-button';

import { usePostsQueryParams } from '@/hooks/params-hooks/usePostsQueryParams';

interface CategoryFiltrationCheckboxProps {
  category: Category;
}

export const CategoryFiltrationCheckbox = ({
  category: { id, name },
}: CategoryFiltrationCheckboxProps) => {
  const { setParam, getParam } = usePostsQueryParams();

  const onCheckedChange = (isChecked: CheckedState) => {
    setParam('category', isChecked ? id : null);
  };

  return (
    <CheckboxButton
      id={id}
      label={name}
      isChecked={getParam('category') === id}
      onCheckedChange={onCheckedChange}
    />
  );
};
