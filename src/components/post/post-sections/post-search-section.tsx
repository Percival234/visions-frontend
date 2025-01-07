'use client';

import { useQuery } from '@tanstack/react-query';
import { Masonry } from 'react-plock';

import { PostPreviewCard } from '@/components/post/post-preview-card';
import { PostPreviewListSkeleton } from '@/components/post/post-skeletons/post-preview-list-skeleton';

import { postsService } from '@/services/api-services/posts/posts.service';

import { usePostsQueryParams } from '@/hooks/params-hooks/usePostsQueryParams';

export const PostSearchSection = () => {
  const { getAllParams } = usePostsQueryParams();

  const { data, isFetching, error, isPending } = useQuery({
    queryKey: ['posts-search'],
    queryFn: () =>
      postsService.getMany({ ...getAllParams(), limit: String(50) }),
  });

  if (isPending || isFetching) return <PostPreviewListSkeleton />;
  if (error) return <div>Error</div>;

  return (
    <section>
      <Masonry
        items={data}
        config={{
          columns: [1, 2, 3, 4],
          gap: [12, 12, 12, 16],
          media: [400, 768, 1280, 1536],
        }}
        render={(post) => <PostPreviewCard key={post.id} post={post} />}
      />
    </section>
  );
};
