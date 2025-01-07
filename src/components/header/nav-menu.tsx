import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/ui/navigation-menu';

import { NavSubMenu } from '@/components/header/nav-sub-menu';

import {
  clubsRoutes,
  contestsRoutes,
  mainRoutes,
  usersRoutes,
} from '@/constants/pages.constant';

export const NavMenu = () => {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList className="space-x-2">
        <NavigationMenuItem>
          <Link href={mainRoutes.new()} passHref legacyBehavior>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Нові
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Категорії</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavSubMenu />
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={clubsRoutes.clubs()} passHref legacyBehavior>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Клуби
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={contestsRoutes.contests()} passHref legacyBehavior>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Конкурси
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={usersRoutes.users()} passHref legacyBehavior>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Користувачі
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
