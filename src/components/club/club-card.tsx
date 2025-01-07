import Link from 'next/link';

import type { ClubWithoutOwner } from '@/types/entities/club.type';

import { Avatar, AvatarFallback, AvatarImage } from '@/ui/avatar';
import { Badge } from '@/ui/badge';
import { Title } from '@/ui/title';

import { ClubCategoryList } from '@/components/category/club-category-list';
import { MembershipJoinButton } from '@/components/membership/membership-join-button';

import { numberFormatter } from '@/helpers/formatters/number-formatter';

import { clubsRoutes } from '@/constants/pages.constant';
import { API_URL } from '@/constants/server-url.constant';

interface ClubCardProps {
  club: ClubWithoutOwner;
}

export const ClubCard = ({
  club: {
    id,
    name,
    image,
    categories,
    settings: { isPrivate },
    membership,
    createdAt,
  },
}: ClubCardProps) => {
  return (
    <div className="flex">
      <Link href={clubsRoutes.clubId(id)} className="rounded-full block">
        <Avatar type="square" size="xl">
          <AvatarImage
            // src={`${API_URL}/images/clubs/${image}`}
            src={image}
            alt={`Зображення клубу ${name}`}
          />
          <AvatarFallback className="text-4xl">
            {name[0].toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </Link>
      <div className="flex flex-col justify-between items-start md:py-2 pl-5">
        <div className="space-y-2">
          <div className="flex gap-2 items-center">
            <Title size="h2">
              <Link
                href={clubsRoutes.clubId(id)}
                className="hover:underline focus:underline"
              >
                {name}
              </Link>
            </Title>
            {isPrivate && <Badge variant="outline">Приватний</Badge>}
          </div>
          <div className="text-sm text-foreground/80">
            {numberFormatter(12426665)} учасників
          </div>
        </div>
        <div className="space-y-4">
          <MembershipJoinButton
            clubId={id}
            isPrivate={isPrivate}
            membership={membership}
          />
          <div className="h-8 overflow-hidden">
            <ClubCategoryList categories={categories} />
          </div>
        </div>
      </div>
    </div>
  );
};
