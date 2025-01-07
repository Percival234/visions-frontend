'use client';

import { useQuery } from '@tanstack/react-query';

import { categoriesService } from '@/services/api-services/categories/categories.service';

export const useGetCategoriesQuery = () => {
  return useQuery({
    queryFn: categoriesService.getManyCategories,
    queryKey: ['categories'],
    gcTime: Infinity,
  });
};
