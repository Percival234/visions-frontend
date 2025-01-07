'use client';

import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/ui/dialog';

import { PostPageModalSkeleton } from '@/components/post/post-skeletons/post-page-modal-skeleton';

import { postsService } from '@/services/api-services/posts/posts.service';

import { getErrorMessage } from '@/helpers/errors/getErrorMessage';

interface PostPageModalProps {
  id: string;
}

export const PostPageModal = ({ id }: PostPageModalProps) => {
  const { data, isPending, error } = useQuery({
    queryKey: ['post', id],
    queryFn: () => postsService.getById(id),
  });

  if (isPending) return <PostPageModalSkeleton />;
  if (error) return toast.error(getErrorMessage(error));

  return (
    <Dialog defaultOpen>
      <DialogContent className="max-w-[800px]">
        <DialogHeader>
          <DialogTitle>{}</DialogTitle>
        </DialogHeader>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
