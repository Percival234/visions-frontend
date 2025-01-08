import type { UserPreview } from '@/types/entities/user.type';
import type { ImageFormat } from '@/types/enums/image-format.enum';
import type { ImageOrientation } from '@/types/enums/image-orientation';
import type { Visibility } from '@/types/enums/visibility.enum';

export type Image = {
  id: string;
  src: string;
  width: number;
  height: number;
  weight: number;
  user: UserPreview;
  visibility: Visibility;
  format: ImageFormat;
  orientation: ImageOrientation;
  userId: string;
  isDeleted: boolean;
  isBlocked: boolean;
  createdAt: string;
  updatedAt: string;
};

export type ImageCreate = Pick<Image, 'visibility'>;

export type ImageUpdate = Partial<
  Pick<Image, 'visibility' | 'isBlocked' | 'isDeleted'>
>;
