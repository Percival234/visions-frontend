'use client';

import { useQuery } from '@tanstack/react-query';

import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card';

import { PostList } from '@/components/post/post-list';

import { postsService } from '@/services/api-services/posts/posts.service';

interface ProfilePostsProps {
  userId: string;
}

export const ProfilePosts = ({ userId }: ProfilePostsProps) => {
  const { data, isPending, isFetching, error } = useQuery({
    queryKey: ['posts', userId],
    queryFn: () => postsService.getMany({ userId }),
  });

  console.log(data);

  if (isFetching || isPending) return 'Loading...';
  if (error) return 'Error';

  return (
    <Card>
      <CardHeader>
        <CardTitle>Публікації</CardTitle>
      </CardHeader>
      <CardContent>
        <PostList posts={data} />
      </CardContent>
    </Card>
  );
};
