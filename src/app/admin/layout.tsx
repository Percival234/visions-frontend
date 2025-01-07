import type { LayoutProps } from '@/types/utils/layout-props.type';

import { Sidebar } from '@/components/admin/sidebar/sidebar';

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex flex-1">{children}</main>
      </div>
    </>
  );
}
