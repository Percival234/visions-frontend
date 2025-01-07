'use client';

import { Button } from '@/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/ui/dropdown-menu';
import { Icon } from '@/ui/icon';
import { SROnly } from '@/ui/sr-only';

interface CommentMenuProps {
  id: string;
}

export const CommentMenu = ({ id }: CommentMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost">
          <Icon iconName="more" />
          <SROnly>Меню коментаря</SROnly>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Icon iconName="alert" />
            <span>Поскаржитись</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icon iconName="edit" />
            <span>Редагувати</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icon iconName="block" />
            <span>Заблокувати</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icon iconName="delete" />
            <span>Видалити</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icon iconName="delete" />
            <span>Видалити</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

// TODO видалення зробити модалкою
