import type { GetOptions } from '@/types/utils/get-options.type';

export type GetManyReportsOptions = GetOptions & {
  search?: string;
  userId?: string;
  type?: string;
  isMarked?: string;
  isRead?: string;
  sort?: string;
  order?: string;
};
