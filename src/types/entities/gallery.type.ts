import type { Collection } from '@/types/entities/collection.type';
import type { Image } from '@/types/entities/image.type';

export type Gallery = {
  id: string;
  ownerId: string;
  images: Image[];
  collections: Collection[];
  createdAt: string;
  updatedAt: string;
};
