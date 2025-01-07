import type { UserPreview } from '@/types/entities/user.type';
import type { ImageOrientation } from '@/types/enums/image-orientation';
import type { Visibility } from '@/types/enums/visibility.enum';

export type Image = {
  id: string;
  user: UserPreview;
  src: string;
  width: number;
  height: number;
  weight: number;
  orientation: ImageOrientation;
  visibility: Visibility;
  isDeleted: boolean;
  isBlocked: boolean;
  createdAt: string;
  updatedAt: string;
};

export type ImageCreate = Pick<Image, 'visibility'> & {
  categoriesIds: [];
};

export type ImageUpdate = Partial<ImageCreate>;

// TODO add image file and formats
