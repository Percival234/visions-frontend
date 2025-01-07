import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/libs/cn/cn';

const titleVariants = cva('', {
  variants: {
    size: {
      h1: 'font-bold text-2xl md:text-3xl',
      h2: 'font-bold text-lg md:text-2xl',
      h3: 'font-semibold text-lg md:text-xl',
      h4: 'font-semibold text-xl',
      h5: 'font-medium text-base md:text-lg',
      h6: 'font-medium text-lg',
    },
  },
  defaultVariants: {
    size: 'h3',
  },
});

interface TitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof titleVariants> {}

export const Title = ({ size, className, ...props }: TitleProps) => {
  const Component = size || 'h3';
  return (
    <Component className={cn(titleVariants({ size, className }))} {...props} />
  );
};
