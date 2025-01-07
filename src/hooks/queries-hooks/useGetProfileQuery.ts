'use client ';

import { useQuery } from '@tanstack/react-query';

import { usersService } from '@/services/api-services/users/users.service';

export const useGetProfileQuery = () => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: usersService.getProfile,
    gcTime: Infinity,
  });
};
