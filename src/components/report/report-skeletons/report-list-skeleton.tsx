import { List } from '@/ui/list';

import { ReportCardSkeleton } from '@/components/report/report-skeletons/report-card-skeleton';

import { numsArrayGenerator } from '@/helpers/generators/nums-array-generator';

export const ReportListSkeleton = () => {
  return (
    <List
      className="flex-col md:gap-2.5"
      EmptyComponent={null}
      data={numsArrayGenerator(10)}
      renderItem={(number) => <ReportCardSkeleton key={`${number}-report`} />}
    />
  );
};
