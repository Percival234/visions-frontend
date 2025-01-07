import type { LayoutProps } from '@/types/utils/layout-props.type';

export default function Layout({ children }: LayoutProps) {
  return <main className="flex flex-1">{children}</main>;
}
