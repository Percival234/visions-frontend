import type { Metadata } from 'next';

import { CenteredContainer } from '@/ui/centered-container';
import { Separator } from '@/ui/separator';
import { Title } from '@/ui/title';

import { NewClubForm } from '@/components/club/club-forms/new-club-form/new-club-form';
import { Paragraph } from '@/components/ui/paragraph';

export const metadata: Metadata = {
  title: 'Новий клуб',
  description: 'Створіть власний клуб та діліться публікаціями з усіма',
};

export default function Page() {
  return (
    <CenteredContainer>
      <Title size="h1">Новий клуб</Title>
      <Separator />
      <Paragraph>
        Не знайшли клуб по інтересам? Тоді створіть власний!
      </Paragraph>
      <NewClubForm />
    </CenteredContainer>
  );
}
