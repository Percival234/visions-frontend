'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/ui/dialog';
import { Skeleton } from '@/ui/skeleton';

import { SROnly } from '@/components/ui/sr-only';

export const PostPageModalSkeleton = () => {
  return (
    <Dialog defaultOpen={true}>
      <DialogContent className="max-w-[800px]">
        <DialogHeader>
          <SROnly>
            <DialogTitle>Публікація</DialogTitle>
          </SROnly>
        </DialogHeader>
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
