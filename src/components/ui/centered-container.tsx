import { cn } from '@/libs/cn/cn';

export const CenteredContainer = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        '@container container max-w-7xl px-3 md:px-5 flex flex-col gap-3 md:gap-5 mx-auto',
        className,
      )}
      {...props}
    />
  );
};
