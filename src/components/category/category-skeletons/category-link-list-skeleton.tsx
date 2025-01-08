import { Skeleton } from '@/ui/skeleton';

import { numsArrayGenerator } from '@/helpers/generators/nums-array-generator';

export const CategoryLinkListSkeleton = () => {
  return (
    <div className="grid w-[500px] lg:w-[750px] xl:w-[1000px] p-3 gap-1 lg:gap-2 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {numsArrayGenerator(15).map((el) => (
        <div key={el} className="p-3 space-y-2">
          <Skeleton className="w-24 h-3.5" />
          <Skeleton className="h-2.5" />
          <Skeleton className="w-36 h-2.5" />
        </div>
      ))}
    </div>
  );
};
