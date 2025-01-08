import { type CollectionIconsName, Icon } from '@/ui/icon';
import { MenuLink } from '@/ui/menu-link';

import { adminRoutes } from '@/constants/pages.constant';

const mainLinks: {
  link: string;
  iconName: CollectionIconsName;
  text: string;
}[] = [
  { link: adminRoutes.dashboard(), iconName: 'dashboard', text: 'Головна' },
  { link: adminRoutes.mail(), iconName: 'mail', text: 'Пошта' },
  {
    link: adminRoutes.notifications(),
    iconName: 'notifications',
    text: 'Повідомлення',
  },
  { link: adminRoutes.reports(), iconName: 'alert', text: 'Звіти' },
];

const entityLinks: {
  link: string;
  iconName: CollectionIconsName;
  text: string;
}[] = [
  { link: adminRoutes.users(), iconName: 'users', text: 'Користувачі' },
  { link: adminRoutes.categories(), iconName: 'categories', text: 'Категорії' },
  { link: adminRoutes.posts(), iconName: 'post', text: 'Пости' },
  { link: adminRoutes.images(), iconName: 'gallery', text: 'Зображення' },
  { link: adminRoutes.contests(), iconName: 'contest', text: 'Конкурси' },
  { link: adminRoutes.clubs(), iconName: 'clubs', text: 'Клуби' },
];

export const SidebarMenu = () => {
  return (
    <nav className="flex-1 p-4 overflow-scroll space-y-5 mt-5">
      <div>
        <div className="font-bold mb-3 text-foreground/90 text-sm">
          Головне меню
        </div>
        <div className="grid gap-1">
          {mainLinks.map(({ link, iconName, text }) => (
            <MenuLink key={link} href={link}>
              <Icon iconName={iconName} />
              {text}
            </MenuLink>
          ))}
        </div>
      </div>
      <div>
        <div className="font-bold mb-3 text-foreground/90 text-sm">
          Сутності
        </div>
        <div className="grid gap-1">
          {entityLinks.map(({ link, iconName, text }) => (
            <MenuLink key={link} href={link}>
              <Icon iconName={iconName} />
              {text}
            </MenuLink>
          ))}
        </div>
      </div>
    </nav>
  );
};
