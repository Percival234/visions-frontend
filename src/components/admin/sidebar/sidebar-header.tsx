import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';

import { mainRoutes } from '@/constants/pages.constant';
import { WEBSITE_NAME } from '@/constants/website-name.constant';

export const SidebarHeader = () => {
  return (
    <div className="p-4 flex items-center gap-4">
      <Button size="icon" asChild variant="ghost">
        <Link href={mainRoutes.new()}>
          <Icon iconName="arrowLeft" />
        </Link>
      </Button>
      <Link
        href={mainRoutes.search()}
        className="font-bold text-xl md:text-3xl uppercase"
      >
        {WEBSITE_NAME}
      </Link>
    </div>
  );
};
