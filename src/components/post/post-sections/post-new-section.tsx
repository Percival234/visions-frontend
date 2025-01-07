'use client';

import { useQuery } from '@tanstack/react-query';

import { PostList } from '@/components/post/post-list';

import { postsService } from '@/services/api-services/posts/posts.service';

export const PostNewSection = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ['new-posts'],
    queryFn: () => postsService.getMany({}),
  });

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return <PostList posts={data} />;
};
