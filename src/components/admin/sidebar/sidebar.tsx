import { SidebarFooter } from './sidebar-footer';
import { SidebarHeader } from './sidebar-header';
import { SidebarMenu } from './sidebar-menu';

export const Sidebar = () => {
  return (
    <div className="h-screen w-72 flex flex-col border-r sticky top-0 bottom-0 left-0">
      <SidebarHeader />
      <SidebarMenu />
      <SidebarFooter />
    </div>
  );
};
