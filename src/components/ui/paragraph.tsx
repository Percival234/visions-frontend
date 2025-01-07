import React from 'react';

import { cn } from '@/libs/cn/cn';

export const Paragraph = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm md:text-base text-foreground/80', className)}
    {...props}
  />
));
Paragraph.displayName = 'Paragraph';
