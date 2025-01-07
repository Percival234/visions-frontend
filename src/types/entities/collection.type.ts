import type { Image } from '@/types/entities/image.type';
import type { UserPreview } from '@/types/entities/user.type';
import type { Visibility } from '@/types/enums/visibility.enum';

export type Collection = {
  id: string;
  user: UserPreview;
  name: string;
  images: Image[];
  visibility: Visibility;
  likedBy: string[];
  createdAt: string;
  updatedAt: string;
};

export type CollectionCreate = Pick<Collection, 'name' | 'visibility'>;
export type CollectionUpdate = Partial<CollectionCreate>;

// todo implement file adding to cteate functions
