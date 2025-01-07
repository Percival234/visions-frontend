import { cn } from '@/libs/cn/cn';

interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  Picture?: React.ReactNode;
}

export const EmptyState = ({
  Picture,
  text,
  className,
  ...props
}: EmptyStateProps) => {
  return (
    <div
      className={cn(
        'flex flex-col gap-2 items-center justify-center py-10',
        className,
      )}
      {...props}
    >
      {Picture}
      {text && <p className="text-muted-foreground">{text}</p>}
    </div>
  );
};
