import type {
  Comment,
  CommentCreate,
  CommentUpdate,
} from '@/types/entities/comment.type';
import type { GetOptions } from '@/types/utils/get-options.type';
import type { ResponseMessage } from '@/types/utils/response-message.type';

import { createSearchParams } from '@/helpers/searchParams/createSearchParams';

import { apiWithAuth } from '@/api/api-instance';

type GetManyCommentsOptions = GetOptions & {
  postId?: string;
  userId?: string;
};

class CommentsService {
  async getComments(options: GetManyCommentsOptions): Promise<Comment[]> {
    return (await apiWithAuth.get(`/comments?${createSearchParams(options)}`))
      .data;
  }

  async createComment(commentCreate: CommentCreate): ResponseMessage {
    return (await apiWithAuth.post('/comments', { json: commentCreate })).data;
  }

  async updateComment(
    id: string,
    commentUpdate: CommentUpdate,
  ): ResponseMessage {
    return (await apiWithAuth.patch(`/comments/${id}`, commentUpdate)).data;
  }

  async deleteComment(id: string): ResponseMessage {
    return (await apiWithAuth.delete(`/comments/${id}`)).data;
  }
}

export const commentsService = new CommentsService();
