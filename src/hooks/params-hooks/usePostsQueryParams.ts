'use client';

import type { GetManyPostsOptions } from '@/services/api-services/posts/posts.service.types';

import { useQueryParams } from './useQueryParams';

export const usePostsQueryParams = () => {
  return useQueryParams<GetManyPostsOptions>();
};
