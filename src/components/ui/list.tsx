import { EmptyState } from '@/ui/empty-state';
import { Icon } from '@/ui/icon';

import { cn } from '@/libs/cn/cn';

interface ListProps<T> extends React.HTMLAttributes<HTMLDivElement> {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
  EmptyComponent?: React.ReactNode | null;
}

export const List = <T,>({
  data,
  renderItem,
  EmptyComponent,
  className,
  ...props
}: ListProps<T>) => {
  if (!data?.length) {
    if (EmptyComponent === null) return null;
    return (
      EmptyComponent || (
        <EmptyState
          text="Список порожній"
          Picture={
            <Icon
              iconName="alert"
              size={24}
              className="text-muted-foreground"
            />
          }
        />
      )
    );
  }

  return (
    <div {...props} className={cn('w-full flex md:gap-4 gap-2.5', className)}>
      {data.map((item) => renderItem(item))}
    </div>
  );
};
