import type { IconBaseProps } from 'react-icons/lib';

import { ICONS } from '@/assets/icons/icons';

export type CollectionIconsName = keyof typeof ICONS;

interface IconProps extends IconBaseProps {
  iconName: CollectionIconsName;
}

export const Icon = ({ iconName, size, ...props }: IconProps) => {
  const Component = ICONS[iconName];
  return <Component size={size || 20} {...props} />;
};
