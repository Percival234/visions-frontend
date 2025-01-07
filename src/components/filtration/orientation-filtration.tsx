import { ImageOrientation } from '@/types/enums/image-orientation';

import { Title } from '@/ui/title';

import { OrientationFiltrationCheckbox } from './orientation-filtration-checkbox';

const orientations = Object.values(ImageOrientation);

export const OrientationFiltration = () => {
  return (
    <div className="space-y-2">
      <Title>Орієнтація</Title>
      <div className="flex flex-wrap gap-2 p-1">
        {orientations.map((orientation) => (
          <OrientationFiltrationCheckbox
            orientation={orientation}
            key={orientation}
          />
        ))}
      </div>
    </div>
  );
};
