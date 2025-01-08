import type { Metadata } from 'next';
import Link from 'next/link';

import { Button } from '@/ui/button';
import { CenteredContainer } from '@/ui/centered-container';
import { Separator } from '@/ui/separator';
import { Title } from '@/ui/title';

import { ClubSearch } from '@/components/club/club-search';
import { SearchClubSection } from '@/components/club/club-sections/search-club-section';

import { clubsRoutes } from '@/constants/pages.constant';

export const metadata: Metadata = {
  title: 'Клуби',
  description:
    'Долучайтеся до клубів за інтересами: обмін досвідом, участь у заходах, обговорення технік зйомки та обладнання.',
};

export default function Page() {
  return (
    <CenteredContainer>
      <div className="flex items-center justify-between gap-2">
        <Title size="h1">Клуби</Title>
        <Button asChild variant="outline">
          <Link href={clubsRoutes.create()}>Створити клуб</Link>
        </Button>
      </div>
      <Separator />
      <ClubSearch />
      <Separator />
      <SearchClubSection />
    </CenteredContainer>
  );
}
