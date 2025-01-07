'use client';

import { toast } from 'sonner';

import { UserRoles } from '@/types/enums/user-roles.enum';

import { AlertDialog, AlertDialogTrigger } from '@/ui/alert-dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLink,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/ui/dropdown-menu';
import { Icon } from '@/ui/icon';
import { Skeleton } from '@/ui/skeleton';
import { UserAvatar } from '@/ui/user-avatar';

import { LogoutModal } from '@/components/header/logout-modal';

import { useGetProfileQuery } from '@/hooks/queries-hooks/useGetProfileQuery';

import { getErrorMessage } from '@/helpers/errors/getErrorMessage';

import {
  adminRoutes,
  galleriesRoutes,
  mainRoutes,
  profilesRoutes,
  settingsRoutes,
} from '@/constants/pages.constant';

export const UserNavMenu = () => {
  const { data: profile, isPending, error } = useGetProfileQuery();

  if (isPending) return <Skeleton className="size-10 rounded-full" />;
  if (error) {
    toast.error(getErrorMessage(error));
    return null;
  }

  const { id, avatar, username, isBlocked, isDeleted, roles } = profile;

  return (
    <AlertDialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="cursor-pointer">
          <UserAvatar
            type="circle"
            user={{ id, avatar, username, isBlocked, isDeleted }}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-60" align="end">
          <DropdownMenuGroup>
            <DropdownMenuLink href={profilesRoutes.profileId(id)}>
              <Icon iconName="profile" />
              Профіль
            </DropdownMenuLink>
            <DropdownMenuLink href={galleriesRoutes.galleryId(id)}>
              <Icon iconName="gallery" />
              Галерея
            </DropdownMenuLink>
            <DropdownMenuLink href={mainRoutes.saved()}>
              <Icon iconName="saved" />
              Збережені
            </DropdownMenuLink>
            <DropdownMenuLink href={mainRoutes.mail()}>
              <Icon iconName="bell" />
              Сповіщення
            </DropdownMenuLink>
            <DropdownMenuLink href={settingsRoutes.profile()}>
              <Icon iconName="settings" />
              Налаштування
            </DropdownMenuLink>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          {roles?.includes(UserRoles.Admin) && (
            <>
              <DropdownMenuGroup>
                <DropdownMenuLink href={adminRoutes.dashboard()}>
                  <Icon iconName="admin" />
                  Пaнель адміністратора
                </DropdownMenuLink>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
            </>
          )}
          <DropdownMenuGroup>
            <DropdownMenuLink href={mainRoutes.support()}>
              <Icon iconName="support" />
              Підтримка
            </DropdownMenuLink>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <AlertDialogTrigger asChild>
            <DropdownMenuItem className="gap-2 px-2 py-1.5">
              <Icon iconName="logout" /> Вихід
            </DropdownMenuItem>
          </AlertDialogTrigger>
        </DropdownMenuContent>
      </DropdownMenu>
      <LogoutModal />
    </AlertDialog>
  );
};
