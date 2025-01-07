'use client';

import { toast } from 'sonner';

import { Separator } from '@/ui/separator';

import { ReportNotificationForm } from '@/components/notification/notification-forms/report-notification-form/report-notification-form';
import { Report } from '@/components/report/report';
import { ReportSkeleton } from '@/components/report/report-skeletons/report-skeleton';

import { useGetReportByIdQuery } from '@/hooks/queries-hooks/useGetReportByIdQuery';

import { getErrorMessage } from '@/helpers/errors/getErrorMessage';

interface ReportViewSection {
  id: string;
}

export const ReportViewSection = ({ id }: ReportViewSection) => {
  const { data: report, error, isPending } = useGetReportByIdQuery(id);

  if (error) {
    toast.error(getErrorMessage(error));
    return null;
  }

  return (
    <div className="h-screen flex flex-col">
      <div className="p-4 min-h-16 h-16">
        <div></div>
        <div></div>
      </div>
      <Separator />
      {isPending ? <ReportSkeleton /> : <Report report={report} />}
      <Separator />
      <div className="p-4">
        {isPending || <ReportNotificationForm user={report.user} />}
      </div>
    </div>
  );
};
