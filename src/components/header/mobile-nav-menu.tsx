import { Button } from '@/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLink,
  DropdownMenuTrigger,
} from '@/ui/dropdown-menu';
import { Icon } from '@/ui/icon';

import {
  clubsRoutes,
  contestsRoutes,
  mainRoutes,
  usersRoutes,
} from '@/constants/pages.constant';

export const MobileNavMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Icon iconName="menu" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60" align="start">
        <DropdownMenuGroup>
          <DropdownMenuLink href={mainRoutes.new()}>
            <Icon iconName="post" />
            Нові
          </DropdownMenuLink>
          <DropdownMenuLink href={clubsRoutes.clubs()}>
            <Icon iconName="clubs" />
            Клуби
          </DropdownMenuLink>
          <DropdownMenuLink href={contestsRoutes.contests()}>
            <Icon iconName="contest" />
            Конкурси
          </DropdownMenuLink>
          <DropdownMenuLink href={usersRoutes.users()}>
            <Icon iconName="users" />
            Користувачі
          </DropdownMenuLink>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
