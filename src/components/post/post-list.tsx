import type { Post } from '@/types/entities/post.type';

import { List } from '@/ui/list';

import { PostCard } from '@/components/post/post-card';
import { EmptyState } from '@/components/ui/empty-state';

interface PostListProps {
  posts: Post[];
}

export const PostList = ({ posts }: PostListProps) => {
  return (
    <List
      className="flex-col"
      data={posts}
      renderItem={(post) => <PostCard key={post.id} post={post} />}
      EmptyComponent={<EmptyState text="Публікації відсутні" />} // TODO add correct empty state maybe with gifs or png image2
    />
  );
};
