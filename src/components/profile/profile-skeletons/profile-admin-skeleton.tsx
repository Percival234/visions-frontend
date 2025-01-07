import { Skeleton } from '@/ui/skeleton';

export const ProfileAdminSkeleton = () => {
  return (
    <div className="flex items-center justify-between gap-2 p-2">
      <Skeleton className="size-11 rounded-full" />
      <div className="flex-1 space-y-1">
        <Skeleton className="rounded-full h-4 w-20" />
        <Skeleton className="h-3 w-36" />
      </div>
      <Skeleton className="size-6" />
    </div>
  );
};
