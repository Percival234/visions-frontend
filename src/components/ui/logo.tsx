import Link from 'next/link';

import { mainRoutes } from '@/constants/pages.constant';
import { WEBSITE_NAME } from '@/constants/website-name.constant';

export const Logo = () => {
  return (
    <Link
      href={mainRoutes.search()}
      className="font-bold text-xl md:text-3xl uppercase"
    >
      {WEBSITE_NAME}
    </Link>
  );
};
