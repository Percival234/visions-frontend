'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import type { Report } from '@/types/entities/report.type';
import { ReportTypes } from '@/types/enums/report-types.enum';

import { Badge } from '@/ui/badge';
import { Card, CardContent, CardHeader } from '@/ui/card';

import { dateFormatter } from '@/helpers/formatters/date-formatter';

import { adminRoutes } from '@/constants/pages.constant';

const getBadgeVariant = (type: ReportTypes) => {
  if (type === ReportTypes.Complaint || type === ReportTypes.Bug)
    return 'destructive';
  if (type === ReportTypes.Feature || type === ReportTypes.Feedback)
    return 'secondary';
  return 'default';
};

interface ReportCardProps {
  report: Report;
}

export const ReportCard = ({
  report: {
    id,
    isMarked,
    read,
    createdAt,
    text,
    type,
    user: { username },
  },
}: ReportCardProps) => {
  const { push } = useRouter();
  const [isRead, setIsRed] = useState(read);

  const onEvent = () => {
    setIsRed(new Date());
    push(adminRoutes.reportId(id));
  };

  return (
    <Card
      tabIndex={0}
      onKeyDown={onEvent}
      onClick={onEvent}
      className="hover:bg-accent hover:cursor-pointer focus:bg-accent"
    >
      <CardHeader className="flex-row items-center justify-between">
        <div className="flex gap-2 items-center">
          {!!isRead || <div className="size-2 bg-sky-600 rounded-full"></div>}
          <div className="font-bold">{username}</div>
          <Badge variant={getBadgeVariant(type)}>{type}</Badge>
        </div>
        <div className="text-xs text-foreground/80 self-start">
          {dateFormatter(createdAt)}
        </div>
      </CardHeader>
      <CardContent>{text}</CardContent>
    </Card>
  );
};
