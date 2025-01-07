import type { Metadata } from 'next';

import type { LayoutProps } from '@/types/utils/layout-props.type';

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/ui/resizable';

import { ReportFilterSection } from '@/components/report/report-sections/report-filter-section';

export const metadata: Metadata = {
  title: 'Звіти',
};

export default function Layout({ children }: LayoutProps) {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ReportFilterSection />
      <ResizableHandle withHandle />
      <ResizablePanel
        defaultSize={65}
        className="min-w-80 h-screen flex flex-col"
      >
        {children}
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
