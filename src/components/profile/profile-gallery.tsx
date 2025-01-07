'use client';

import { useQuery } from '@tanstack/react-query';

import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card';

interface ProfilePostsProps {
  userId: string;
}

export const ProfileGallery = ({ userId }: ProfilePostsProps) => {
  // const { data, isPending, isFetching, error } = useQuery({
  //   queryKey: ['posts', userId],
  //   queryFn: () => postsService.getMany({ userId }),
  // });

  // if (isFetching || isPending) return 'Loading...';
  // if (error) return 'Error';

  return (
    <Card>
      <CardHeader>
        <CardTitle>Галерея</CardTitle>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};
