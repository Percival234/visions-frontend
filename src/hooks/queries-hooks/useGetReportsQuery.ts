'use client';

import { useInfiniteQuery } from '@tanstack/react-query';

import { reportsService } from '@/services/api-services/reports/reports.service';

import { useReportsQueryParams } from '@/hooks/params-hooks/useReportsQueryParams';

export const useGetReportsQuery = () => {
  const { getAllParams } = useReportsQueryParams();
  return useInfiniteQuery({
    queryKey: ['reports'],
    queryFn: ({ pageParam }) =>
      reportsService.getMany({
        ...getAllParams(),
        limit: String(15),
        page: String(pageParam),
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.length < 15) return undefined;
      return lastPageParam + 1;
    },
  });
};
