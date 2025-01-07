import type { Metadata } from 'next';

import { Paragraph } from '@/ui/paragraph';
import { Title } from '@/ui/title';

export const metadata: Metadata = {
  title: 'Налаштування | Обліковий запис',
  description: 'Керуйте вашими особистими даними',
};

export default function Page() {
  return (
    <div className="space-y-2">
      <Title size="h2">Обліковий запис</Title>
      <Paragraph>Керуйте вашими особистими даними.</Paragraph>
    </div>
  );
}
