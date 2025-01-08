'use client';

import { UserAvatar } from '@/ui/user-avatar';

import { useGetProfileByIdQuery } from '@/hooks/queries-hooks/useGetProfileByIdQuery';

interface ProfileInfoProps {
  userId: string;
}

export const ProfileInfo = ({ userId }: ProfileInfoProps) => {
  const { data: profile, isPending, error } = useGetProfileByIdQuery(userId);

  if (isPending) return 'Loading...';
  if (error) return 'Error';

  const { id, avatar, username, isBlocked, isDeleted } = profile;

  return (
    <div>
      <div className="p-3 @lg:p-5 flex gap-8">
        <UserAvatar
          isLink={false}
          size="2xl"
          user={{ id, avatar, username, isBlocked, isDeleted }}
        />
        <div>{profile.username}</div>
      </div>
    </div>
  );
};
