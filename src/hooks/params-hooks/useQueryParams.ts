'use client';

// import { useQueryClient } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';

export const useQueryParams = <T extends Record<string, string>>() => {
  // const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const router = useRouter();

  const getParam = (key: keyof T): string | null => {
    return searchParams.get(String(key));
  };

  const getAllParams = (): T => {
    const params: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });
    return params as T;
  };

  const setParam = (key: keyof T, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(String(key), value);
    } else {
      params.delete(String(key));
    }
    router.push(`?${params.toString()}`);
    // console.log('first');
    // queryClient.invalidateQueries({ queryKey: [invalidateTag] });
  };

  return {
    getParam,
    setParam,
    getAllParams,
  };
};
