import type { PageProps } from '@/types/utils/page-props.type';

import { ReportViewSection } from '@/components/report/report-sections/report-view-section';

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return <ReportViewSection id={id} />;
}
