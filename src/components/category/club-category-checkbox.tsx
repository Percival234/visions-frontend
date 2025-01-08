import type { CheckedState } from '@radix-ui/react-checkbox';

import type { Category } from '@/types/entities/category.type';

import { CheckboxButton } from '@/ui/checkbox-button';

interface ClubCategoryCheckboxProps {
  category: Category;
  checkedCategories: Set<string>;
  setCheckedCategories: React.Dispatch<React.SetStateAction<Set<string>>>;
}

export const ClubCategoryCheckbox = ({
  category: { id, name },
  checkedCategories,
  setCheckedCategories,
}: ClubCategoryCheckboxProps) => {
  const isChecked = checkedCategories.has(id);

  const onCheckedChange = (isChecked: CheckedState) => {
    setCheckedCategories((prev) => {
      const newSet = new Set(prev);
      if (isChecked) {
        newSet.add(id);
      } else {
        newSet.delete(id);
      }
      return newSet;
    });
  };
  return (
    <CheckboxButton
      key={id}
      isChecked={isChecked}
      label={name}
      id={id}
      onCheckedChange={onCheckedChange}
    />
  );
};
