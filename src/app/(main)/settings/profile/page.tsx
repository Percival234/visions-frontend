import type { Metadata } from 'next';

import { Paragraph } from '@/ui/paragraph';
import { Title } from '@/ui/title';

export const metadata: Metadata = {
  title: 'Налаштування | Профіль',
  description: 'Змінюйте інформацію про себе та керуйте її доступом',
};

export default function Page() {
  return (
    <div className="space-y-2">
      <Title size="h2">Профіль</Title>
      <Paragraph>
        Змінюйте інформацію про себе та керуйте її доступом. Більшість
        налаштувань будуть видимими для інших.
      </Paragraph>
    </div>
  );
}
