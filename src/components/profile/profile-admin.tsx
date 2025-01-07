'use client';

import { Button } from '@/ui/button';
import { Icon } from '@/ui/icon';
import { UserAvatar } from '@/ui/user-avatar';

import { ProfileAdminSkeleton } from '@/components/profile/profile-skeletons/profile-admin-skeleton';

import { useGetProfileQuery } from '@/hooks/queries-hooks/useGetProfileQuery';

export const ProfileAdmin = () => {
  const { data: profile, isPending, error } = useGetProfileQuery();

  if (isPending) return <ProfileAdminSkeleton />;
  if (error) return null;

  const { id, username, email, avatar, isBlocked, isDeleted } = profile;

  return (
    <Button
      variant="ghost"
      className="w-full h-auto p-0 overflow-hidden"
      asChild
    >
      <div className="flex cursor-pointer items-center justify-between gap-2 p-2">
        <UserAvatar
          size="md"
          user={{ id, avatar, username, isBlocked, isDeleted }}
        />
        <div className="flex-1">
          <div className="font-extrabold text-base">{username}</div>
          <div className="text-muted-foreground font-normal text-sm truncate max-w-40">
            {email}
          </div>
        </div>
        <Icon iconName="chevrons" className="size-6" />
      </div>
    </Button>
  );
};
