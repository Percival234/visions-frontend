import type { Metadata } from 'next';

import { Paragraph } from '@/ui/paragraph';
import { Title } from '@/ui/title';

import { ThemeSettings } from '@/components/settings/appearance/theme-settings';

export const metadata: Metadata = {
  title: 'Налаштування | Зовнішній вигляд',
  description: 'Персоналізуйте свій простір',
};

export default function Page() {
  return (
    <>
      <div className="space-y-2">
        <Title size="h2">Зовнішній вигляд</Title>
        <Paragraph>Персоналізуйте свій простір.</Paragraph>
      </div>
      <ThemeSettings />
    </>
  );
}
