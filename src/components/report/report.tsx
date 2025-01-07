import Link from 'next/link';

import type { Report as ReportType } from '@/types/entities/report.type';

import { Separator } from '@/ui/separator';
import { UserAvatar } from '@/ui/user-avatar';

import { dateFormatter } from '@/helpers/formatters/date-formatter';

import { profilesRoutes } from '@/constants/pages.constant';

interface ReportProps {
  report: ReportType;
}

export const Report = ({
  report: { read, isMarked, text, type, createdAt, user },
}: ReportProps) => {
  const { id, username, email } = user;
  return (
    <>
      <div className="p-4 flex justify-between items-center">
        <div className="flex gap-4">
          <UserAvatar user={user} />
          <div>
            <Link
              href={profilesRoutes.profileId(id)}
              className="font-bold text-lg leading-none"
            >
              {username}
            </Link>
            <div className="text-muted-foreground text-sm">{email}</div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-end gap-2">
          <div className="text-muted-foreground text-sm">
            {dateFormatter(createdAt, {
              year: 'numeric',
              month: 'short',
              day: '2-digit',
              hour: 'numeric',
              minute: '2-digit',
            })}
          </div>
          <div>
            Тип: <span className="text-foreground">{type}</span>
          </div>
        </div>
      </div>
      <Separator />
      <div className="p-4 flex-1 overflow-scroll">{text}</div>
    </>
  );
};
