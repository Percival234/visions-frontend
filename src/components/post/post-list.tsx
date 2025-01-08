import type { Post } from '@/types/entities/post.type';

import { EmptyState } from '@/ui/empty-state';
import { List } from '@/ui/list';

import { PostCard } from '@/components/post/post-card';

interface PostListProps {
  posts: Post[];
}

export const PostList = ({ posts }: PostListProps) => {
  return (
    <List
      className="flex-col"
      data={posts}
      renderItem={(post) => <PostCard key={post.id} post={post} />}
      EmptyComponent={<EmptyState text="Публікації відсутні" />}
    />
  );
};
