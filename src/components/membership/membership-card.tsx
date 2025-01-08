import Link from 'next/link';

import type { Membership } from '@/types/entities/membership.type';
import { ClubRoles } from '@/types/enums/club-roles.enum';

import { Badge } from '@/ui/badge';
import { Title } from '@/ui/title';
import { UserAvatar } from '@/ui/user-avatar';

import { profilesRoutes } from '@/constants/pages.constant';

import { MembershipRoles } from './membership-roles';
import { MembershipStatusButton } from './membership-status-button';

interface MembershipCardProps {
  membership: Membership;
}

export const MembershipCard = ({ membership }: MembershipCardProps) => {
  const { id, roles, status, clubId, createdAt, user } = membership;

  const isAssitant = roles.includes(ClubRoles.Assistant);
  const isOwner = roles.includes(ClubRoles.Owner);

  return (
    <div className="flex gap-6">
      <UserAvatar user={user} size="xl" />
      <div>
        <div className="flex items-center gap-2">
          <Title>
            <Link href={profilesRoutes.profileId(user.id)}>
              {user.username}
            </Link>
          </Title>
          {isOwner ? (
            <Badge>Власник</Badge>
          ) : isAssitant ? (
            <Badge>Асистент</Badge>
          ) : null}
        </div>
        {/* <MembershipRoles membership={membership}/> */}
        <MembershipStatusButton membership={membership} />
      </div>
    </div>
  );
};
