'use client';

import { toast } from 'sonner';

import { ResizablePanel } from '@/ui/resizable';
import { Separator } from '@/ui/separator';
import { Title } from '@/ui/title';

import { ReportList } from '@/components/report/report-list';
import { ReportSearch } from '@/components/report/report-search';
import { ReportListSkeleton } from '@/components/report/report-skeletons/report-list-skeleton';

import { useGetReportsQuery } from '@/hooks/queries-hooks/useGetReportsQuery';

import { getErrorMessage } from '@/helpers/errors/getErrorMessage';

export const ReportFilterSection = () => {
  const {
    data: reports,
    error,
    isPending,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useGetReportsQuery();

  if (error) {
    toast.error(getErrorMessage(error));
    return null;
  }

  return (
    <ResizablePanel
      defaultSize={35}
      className="min-w-80 h-screen flex flex-col"
    >
      <div className="p-4 h-16 flex items-center justify-between gap-2">
        <Title>Звіти</Title>
        <div></div>
      </div>
      <Separator />
      <div className="p-4 space-y-4 flex-1 overflow-scroll">
        <ReportSearch />
        {isPending ? (
          <ReportListSkeleton />
        ) : (
          <ReportList reports={reports.pages.flatMap((report) => report)} />
        )}
        {isFetchingNextPage && <ReportListSkeleton />}
        {hasNextPage && !isFetching && (
          <div className="bg-emerald-600">Далі</div>
        )}
      </div>
    </ResizablePanel>
  );
};
