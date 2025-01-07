import { CenteredContainer } from '@/ui/centered-container';
import { Logo } from '@/ui/logo';

import { MobileNavMenu } from '@/components/header/mobile-nav-menu';
import { NavMenu } from '@/components/header/nav-menu';
import { SearchLink } from '@/components/header/search-link';
import { UserNavMenu } from '@/components/header/user-nav-menu';
import { ThemeButton } from '@/components/theme/theme-button';

export const Header = () => {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 h-12 md:h-16 flex justify-center shadow bg-background">
      <CenteredContainer className="flex-row items-center justify-between max-w-full">
        <div className="flex items-center gap-3 lg:gap-8">
          <MobileNavMenu />
          <Logo />
          <NavMenu />
        </div>
        <div className="flex gap-2.5 items-center">
          <SearchLink />
          <ThemeButton />
          <UserNavMenu />
        </div>
      </CenteredContainer>
    </header>
  );
};
