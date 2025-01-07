import { Card, CardContent, CardHeader } from '@/ui/card';

import { Skeleton } from '@/components/ui/skeleton';

export const ReportCardSkeleton = () => {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-24 rounded-full" />
          <Skeleton className="h-7 w-14 rounded-full" />
        </div>
        <Skeleton className="h-3 w-16" />
      </CardHeader>
      <CardContent className="space-y-3">
        <Skeleton className="h-3.5" />
        <Skeleton className="h-3.5 w-3/4" />
      </CardContent>
    </Card>
  );
};
