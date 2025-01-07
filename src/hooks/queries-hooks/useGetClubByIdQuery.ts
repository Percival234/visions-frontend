'use client ';

import { useQuery } from '@tanstack/react-query';

import { clubsService } from '@/services/api-services/clubs/clubs.service';

export const useGetClubByIdQuery = (id: string) => {
  return useQuery({
    queryKey: ['clubs', id],
    queryFn: () => clubsService.getClubById(id),
  });
};
