import Link from 'next/link';

import type { UserPreview } from '@/types/entities/user.type';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  type AvatarProps,
} from '@/ui/avatar';

import { profilesRoutes } from '@/constants/pages.constant';

interface UserAvatarProps extends AvatarProps {
  user: UserPreview;
  isLink?: boolean;
}

export const UserAvatar = ({
  user: { id, avatar, username, isBlocked, isDeleted },
  isLink = true,
  ...props
}: UserAvatarProps) => {
  const avatarContent = (
    <Avatar type="circle" {...props}>
      <AvatarImage
        src={'https://github.com/shadcn.png'}
        alt={`Зображення профілю ${username}`}
      />
      <AvatarFallback>{username[0].toUpperCase()}</AvatarFallback>
    </Avatar>
  );

  return isLink ? (
    <Link className="rounded-full block" href={profilesRoutes.profileId(id)}>
      {avatarContent}
    </Link>
  ) : (
    avatarContent
  );
};
