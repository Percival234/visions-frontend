import type { Metadata } from 'next';

import type { LayoutProps } from '@/types/utils/layout-props.type';

export const metadata: Metadata = {
  title: 'Відновлення паролю',
  description: 'Відновлення паролю',
};

export default function Layout({ children }: LayoutProps) {
  return <section>{children}</section>;
}
