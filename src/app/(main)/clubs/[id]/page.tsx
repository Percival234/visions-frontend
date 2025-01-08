import type { Metadata } from 'next';

import type { PageProps } from '@/types/utils/page-props.type';

import { CenteredContainer } from '@/ui/centered-container';

import { ClubInfo } from '@/components/club/club-info';

export const metadata: Metadata = {
  title: 'Клуби',
  description:
    'Долучайтеся до клубів за інтересами: обмін досвідом, участь у заходах, обговорення технік зйомки та обладнання.',
};

// TODO implement correct metadata for id club

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  return (
    <CenteredContainer>
      <ClubInfo clubId={id} />
      {/* <ClubMembers clubId={id} />
      <ClubPosts clubId={id} /> */}
    </CenteredContainer>
  );
}
