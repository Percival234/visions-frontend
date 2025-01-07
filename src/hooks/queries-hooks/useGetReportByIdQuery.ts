'use client ';

import { useQuery } from '@tanstack/react-query';

import { reportsService } from '@/services/api-services/reports/reports.service';

export const useGetReportByIdQuery = (id: string) => {
  return useQuery({
    queryKey: ['reports', id],
    queryFn: () => reportsService.getById(id),
  });
};
