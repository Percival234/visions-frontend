import type { Metadata } from 'next';

import type { LayoutProps } from '@/types/utils/layout-props.type';

import { CenteredContainer } from '@/ui/centered-container';
import { Title } from '@/ui/title';

import { SettingsMenu } from '@/components/settings/menu/setting-menu';
import { Separator } from '@/components/ui/separator';

import { WEBSITE_NAME } from '@/constants/website-name.constant';

export const metadata: Metadata = {
  title: 'Налаштування',
  description: `Налаштуйте як ${WEBSITE_NAME} буде виглядати саме для вас`,
};

export default function Layout({ children }: LayoutProps) {
  return (
    <CenteredContainer>
      <Title size="h1">Налаштування</Title>
      <Separator />
      <div className="flex gap-8">
        <SettingsMenu />
        <CenteredContainer className="px-0 md:px-0">
          {children}
        </CenteredContainer>
      </div>
    </CenteredContainer>
  );
}
// TODO прибрати сепаратор на сторінках і реалзіувати його через заголовки
