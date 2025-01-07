import type { Comment } from '@/types/entities/comment.type';

import { EmptyState } from '@/ui/empty-state';
import { List } from '@/ui/list';

import { CommentCard } from '@/components/comment/comment-card';

interface CommentListProps {
  comments: Comment[];
}

export const CommentList = ({ comments }: CommentListProps) => {
  return (
    <List
      className="flex-col"
      data={comments}
      renderItem={(comment) => (
        <CommentCard key={comment.id} comment={comment} />
      )}
      EmptyComponent={<EmptyState text="Коментарі відстуні" />}
    />
  );
};
