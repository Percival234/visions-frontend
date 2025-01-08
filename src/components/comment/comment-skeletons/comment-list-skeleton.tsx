import { List } from '@/ui/list';
import { Skeleton } from '@/ui/skeleton';

import { numsArrayGenerator } from '@/helpers/generators/nums-array-generator';

// TODO кастомізувати всі скелетон листи і елементи окремо та додати специфічний ключ як тут або краще та перевірити на помилки

export const CommentListSkeleton = () => {
  return (
    <List
      className="flex-col"
      data={numsArrayGenerator(10)}
      renderItem={(num) => (
        <div key={`comment-${num}`} className="p-2 space-y-4">
          <div className="flex items-center justify-between gap-3">
            <Skeleton className="size-10 rounded-full" />
            <div className="flex-1 space-y-1">
              <Skeleton className="h-3.5 w-28 rounded-full" />
              <Skeleton className="h-3 w-16" />
            </div>
            <Skeleton className="size-8" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        </div>
      )}
      EmptyComponent={null}
    />
  );
};
