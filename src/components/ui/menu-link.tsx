'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/libs/cn/cn';

export const MenuLink = ({
  href,
  className,
  ...props
}: React.ComponentProps<typeof Link>) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        'px-2.5 py-2 inline-flex gap-2 items-center font-medium duration-100 whitespace-nowrap text-sm rounded text-muted-foreground outline-none transition-all hover:text-foreground hover:bg-accent focus:bg-accent focus:text-foreground disabled:pointer-events-none disabled:opacity-50',
        className,
        {
          'bg-accent text-foreground': pathname === href,
        },
      )}
      {...props}
    />
  );
};
