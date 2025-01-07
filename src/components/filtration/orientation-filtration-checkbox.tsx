'use client';

import type { CheckedState } from '@radix-ui/react-checkbox';

import type { ImageOrientation } from '@/types/enums/image-orientation';

import { CheckboxButton } from '@/ui/checkbox-button';

import { usePostsQueryParams } from '@/hooks/params-hooks/usePostsQueryParams';

interface OrientationFiltrationCheckboxProps {
  orientation: ImageOrientation;
}

export const OrientationFiltrationCheckbox = ({
  orientation,
}: OrientationFiltrationCheckboxProps) => {
  const { setParam, getParam } = usePostsQueryParams();

  const onCheckedChange = (isChecked: CheckedState) => {
    setParam('orientation', isChecked ? orientation : null);
  };

  return (
    <CheckboxButton
      id={orientation}
      label={orientation}
      isChecked={getParam('category') === orientation}
      onCheckedChange={onCheckedChange}
    />
  );
};
