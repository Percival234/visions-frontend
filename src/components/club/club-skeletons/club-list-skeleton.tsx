import { List } from '@/components/ui/list';
import { Skeleton } from '@/components/ui/skeleton';

import { numsArrayGenerator } from '@/helpers/generators/nums-array-generator';

export const ClubListSkeleton = () => {
  return (
    <List
      className="flex-col"
      data={numsArrayGenerator(10)}
      renderItem={(index) => (
        <div className="flex gap-3" key={index}>
          <Skeleton className="size-56 rounded-md" />
          <div>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        </div>
      )}
      EmptyComponent={null}
    />
  );
};
