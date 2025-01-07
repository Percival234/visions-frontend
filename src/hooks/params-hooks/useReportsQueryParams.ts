'use client';

import type { GetManyReportsOptions } from '@/services/api-services/reports/reports.service.types';

import { useQueryParams } from './useQueryParams';

export const useReportsQueryParams = () => {
  return useQueryParams<GetManyReportsOptions>();
};
