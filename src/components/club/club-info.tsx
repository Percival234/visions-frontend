'use client';

import Link from 'next/link';

import { MembershipStatus } from '@/types/enums/membership-status.enum';

import { Avatar, AvatarFallback, AvatarImage } from '@/ui/avatar';
import { Badge } from '@/ui/badge';
import { CenteredContainer } from '@/ui/centered-container';
import { Icon } from '@/ui/icon';
import { Title } from '@/ui/title';

import { useGetClubByIdQuery } from '@/hooks/queries-hooks/useGetClubByIdQuery';

import { numberFormatter } from '@/helpers/formatters/number-formatter';

import { clubsRoutes } from '@/constants/pages.constant';

import { ClubPrivateState } from './club-state/club-private-state';

interface ClubInfoProps {
  clubId: string;
}

export const ClubInfo = ({ clubId }: ClubInfoProps) => {
  const { data: club, isPending, error } = useGetClubByIdQuery(clubId);

  if (isPending) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  return (
    <div>
      <div className="absolute top-0 left-0 right-0 h-80 bg-blue-900">
        <CenteredContainer className="h-full items-end flex-row pt-16">
          <Avatar type="square" size="2xl" className="top-1/2">
            <AvatarImage
              // src={`${API_URL}/images/clubs/${image}`}
              src={club.image}
              alt={`Зображення клубу ${club.name}`}
            />
            <AvatarFallback className="text-4xl">
              {club.name[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="p-3 space-y-2 text-white">
            <div className="flex items-center gap-2">
              <Title size="h1">{club.name}</Title>
              {club.settings.isPrivate && <Badge>Приватний</Badge>}
            </div>
            <Link
              href={clubsRoutes.clubIdMembers(clubId)}
              className="font-medium flex gap-2"
            >
              <span>{numberFormatter(12426665)} учасників</span>
              <Icon iconName="users" />
            </Link>
          </div>
        </CenteredContainer>
      </div>
      <div className="pt-96">
        {club.settings.isPrivate &&
          club.membership?.status !== MembershipStatus.Approved && (
            <ClubPrivateState />
          )}
      </div>
    </div>
  );
};
