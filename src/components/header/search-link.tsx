import Link from 'next/link';

import { Button } from '@/ui/button';
import { Icon } from '@/ui/icon';

import { mainRoutes } from '@/constants/pages.constant';

export const SearchLink = () => {
  return (
    <Button variant="ghost" size="icon" asChild className="lg:hidden">
      <Link href={mainRoutes.search()}>
        <Icon iconName="search" />
      </Link>
    </Button>
  );
};
