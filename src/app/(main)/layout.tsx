import type { LayoutProps } from '@/types/utils/layout-props.type';

import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header/header';

interface LayoutWithModalProps extends LayoutProps {
  modal: React.ReactNode;
}

export default function Layout({ children, modal }: LayoutWithModalProps) {
  return (
    <>
      {modal}
      <Header />
      <main className="flex-1 pt-4">{children}</main>
      <Footer />
    </>
  );
}
