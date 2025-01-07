'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import type { CommentCreate } from '@/types/entities/comment.type';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';

import { commentsService } from '@/services/api-services/comments/comments.service';

import { useToggle } from '@/hooks/useToggle';

import {
  type NewCommentFormSchema,
  newCommentFormSchema,
} from './new-comment-schema';

interface NewCommentFormProps {
  postId: string;
}

export const NewCommentForm = ({ postId }: NewCommentFormProps) => {
  const { state, close, open } = useToggle();
  const form = useForm<NewCommentFormSchema>({
    resolver: zodResolver(newCommentFormSchema),
    defaultValues: {
      comment: '',
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (commentData: CommentCreate) =>
      commentsService.createComment(commentData),
    onSuccess: (response) => {
      toast.success(response.message);
      form.reset();
    },
  });

  const onSubmit = ({ comment }: NewCommentFormSchema) => {
    mutate({
      comment,
      postId,
    });
  };

  return (
    <>
      {state ? (
        <Form {...form}>
          <form
            className="flex flex-col gap-3"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Textarea
                      className="w-full flex-1"
                      placeholder="Додайте коментар"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-3 justify-end">
              <Button onClick={close} variant="secondary">
                Скасувати
              </Button>
              <Button type="submit" disabled={isPending}>
                Коментувати
              </Button>
            </div>
          </form>
        </Form>
      ) : (
        <Button onClick={open}>Залишити коментар</Button>
      )}
    </>
  );
};

// TODO кнопка загрузки окрема
