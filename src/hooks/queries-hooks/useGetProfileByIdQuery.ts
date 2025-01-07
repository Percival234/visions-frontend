'use client ';

import { useQuery } from '@tanstack/react-query';

import { usersService } from '@/services/api-services/users/users.service';

export const useGetProfileByIdQuery = (id: string) => {
  return useQuery({
    queryKey: ['profiles', id],
    queryFn: () => usersService.getProfileById(id),
  });
};
