import type { Metadata } from 'next';

import type { PageProps } from '@/types/utils/page-props.type';

import { MembershipSearchSection } from '@/components/membership/membership-sections/membership-search-section';
import { CenteredContainer } from '@/components/ui/centered-container';
import { Title } from '@/components/ui/title';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'Учасники клубу',
  description: 'Додавайте нових учасників та керуйте підписками',
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return (
    <CenteredContainer>
      <Title size="h1">Учасники</Title>
      <Separator/>
      <MembershipSearchSection clubId={id} />
    </CenteredContainer>
  );
}
