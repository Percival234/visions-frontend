import type { Report } from '@/types/entities/report.type';

import { List } from '@/ui/list';

import { ReportCard } from '@/components/report/report-card';

interface ReportListProps {
  reports: Report[];
}

export const ReportList = ({ reports }: ReportListProps) => {
  return (
    <List
      className="flex-col md:gap-2.5"
      data={reports}
      renderItem={(report) => <ReportCard key={report.id} report={report} />}
    />
  );
};
