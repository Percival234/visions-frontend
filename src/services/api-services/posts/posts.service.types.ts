import type { SortOrders } from '@/types/enums/sort-order.enum';
import type { GetOptions } from '@/types/utils/get-options.type';

export type GetManyPostsOptions = GetOptions & {
  userId?: string;
  search?: string;
  category?: string;
  orientation?: ImageOrientation;
  following?: string;
  isPopular?: string;
  isPrivate?: string;
  isDeleted?: string;
  isBlocked?: string;
  sortMethod?: 'popularity' | 'createdAt' | 'alphabet';
  sortOrder?: SortOrders;
};
