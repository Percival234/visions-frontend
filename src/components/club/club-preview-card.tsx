import Link from 'next/link';

import type { ClubPreview } from '@/types/entities/club.type';

import { Avatar, AvatarFallback, AvatarImage } from '@/ui/avatar';

import { clubsRoutes } from '@/constants/pages.constant';

interface ClubPreviewProps {
  club: ClubPreview;
}

export const ClubPreviewCard = ({
  club: { id, image, name },
}: ClubPreviewProps) => {
  return (
    <Link href={clubsRoutes.clubId(id)}>
      <Avatar>
        <AvatarImage src={image} alt={`Зображення клубу ${name}`} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
    </Link>
  );
};

// TODO передивитись яке там зорбраження в аватарі IMAGE or img or picture
