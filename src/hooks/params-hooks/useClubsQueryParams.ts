'use client';

import type { GetManyClubsOptions } from '@/services/api-services/clubs/clubs.service.types';

import { useQueryParams } from './useQueryParams';

export const useClubsQueryParams = () => {
  return useQueryParams<GetManyClubsOptions>();
};
