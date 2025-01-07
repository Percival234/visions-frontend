import { Icon } from '@/ui/icon';
import { MenuLink } from '@/ui/menu-link';

import { settingsRoutes } from '@/constants/pages.constant';

export const SettingsMenu = () => {
  return (
    <div className="min-w-52 w-52 flex flex-col gap-0.5">
      <MenuLink href={settingsRoutes.profile()}>
        <Icon iconName="profile" />
        Профіль
      </MenuLink>
      <MenuLink href={settingsRoutes.account()}>
        <Icon iconName="account" />
        Обліковий запис
      </MenuLink>
      <MenuLink href={settingsRoutes.password()}>
        <Icon iconName="key" />
        Пароль
      </MenuLink>
      <MenuLink href={settingsRoutes.appearance()}>
        <Icon iconName="palette" />
        Зовнішній вигляд
      </MenuLink>
    </div>
  );
};
