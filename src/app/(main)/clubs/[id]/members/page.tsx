import type { Metadata } from 'next';

import type { PageProps } from '@/types/utils/page-props.type';

import { CenteredContainer } from '@/ui/centered-container';
import { Separator } from '@/ui/separator';
import { Title } from '@/ui/title';

import { MembershipSearchSection } from '@/components/membership/membership-sections/membership-search-section';

export const metadata: Metadata = {
  title: 'Учасники клубу',
  description: 'Додавайте нових учасників та керуйте підписками',
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return (
    <CenteredContainer>
      <Title size="h1">Учасники</Title>
      <Separator />
      <MembershipSearchSection clubId={id} />
    </CenteredContainer>
  );
}
