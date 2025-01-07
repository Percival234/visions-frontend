'use client';

import { useInfiniteQuery } from '@tanstack/react-query';

import { Button } from '@/ui/button';

import { commentsService } from '@/services/api-services/comments/comments.service';

import { NewCommentForm } from '../comment-forms/new-comment-form/new-comment-form';
import { CommentList } from '../comment-list';
import { CommentListSkeleton } from '../comment-skeletons/comment-list-skeleton';

interface CommentSectionProps {
  postId: string;
}

export const PostCommentSection = ({ postId }: CommentSectionProps) => {
  const {
    data,
    error,
    isPending,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['comments', postId],
    queryFn: ({ pageParam }) =>
      commentsService.getComments({
        postId: postId,
        limit: String(15),
        page: String(pageParam),
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.length < 15) return undefined;
      return lastPageParam + 1;
    },
  });

  if (isPending) return <CommentListSkeleton />;
  if (error) return 'error';

  return (
    <div className="flex flex-col gap-3 flex-1">
      <CommentList comments={data.pages.flatMap((page) => page)} />
      {!isFetchingNextPage && hasNextPage && (
        <Button variant="secondary" size="sm" onClick={() => fetchNextPage()}>
          Завантажити ще {15} коментарів
        </Button>
      )}
      {isFetching && <CommentListSkeleton />}
      <NewCommentForm postId={postId} />
    </div>
  );
};
