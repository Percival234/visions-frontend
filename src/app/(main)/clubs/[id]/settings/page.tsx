import type { Metadata } from 'next';

import { CenteredContainer } from '@/ui/centered-container';
import { Separator } from '@/ui/separator';
import { Title } from '@/ui/title';

export const metadata: Metadata = {
  title: 'Налаштування клубу',
  description: 'Керуйте налаштуваннями клубу',
};

export default function Page() {
  return (
    <CenteredContainer>
      <Title size="h1">Налаштування клубу</Title>
      <Separator />
    </CenteredContainer>
  );
}
