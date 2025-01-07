import { Skeleton } from '@/ui/skeleton';

import { numsArrayGenerator } from '@/helpers/generators/nums-array-generator';

export const PostPreviewListSkeleton = () => {
  return (
    <div className="grid gap-3 min-[400px]:grid-cols-2 md:grid-cols-3 xl:gap-4 xl:grid-cols-4">
      {numsArrayGenerator(20).map((el) => (
        <Skeleton
          key={el}
          className="w-full aspect-square xl:aspect-auto xl:h-72"
        />
      ))}
    </div>
  );
};
