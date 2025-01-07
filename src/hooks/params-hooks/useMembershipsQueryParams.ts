'use client';

import type { GetManyMembershipsOptions } from '@/services/api-services/clubs/clubs.service.types';

import { useQueryParams } from './useQueryParams';

export const useMembershipsQueryParams = () => {
  return useQueryParams<GetManyMembershipsOptions>();
};
