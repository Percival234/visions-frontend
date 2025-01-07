import { CategoryFiltration } from './category-filtration';
import { OrientationFiltration } from './orientation-filtration';

export const AsideFiltration = () => {
  return (
    <div className="w-72 hidden relative lg:flex border-r min-h-screen">
      <div className="relative flex-1">
        <div className="p-4 sticky top-0 left-0 flex-1 space-y-4">
          <CategoryFiltration />
          <OrientationFiltration />
        </div>
      </div>
    </div>
  );
};
