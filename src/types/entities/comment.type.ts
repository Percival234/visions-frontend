import type { UserPreview } from '@/types/entities/user.type';

export type Comment = {
  id: string;
  comment: string;
  user: UserPreview;
  isDeleted: boolean;
  isBlocked: boolean;
  createdAt: string;
  updatedAt: string;
};

export type CommentCreate = Pick<Comment, 'comment'> & { postId: string };
export type CommentUpdate = Partial<
  Pick<Comment, 'comment' | 'isBlocked' | 'isDeleted'>
>;
