import Link from 'next/link';

import type { Comment } from '@/types/entities/comment.type';

import { dateFormatter } from '@/helpers/formatters/date-formatter';

import { profilesRoutes } from '@/constants/pages.constant';

import { UserAvatar } from '../ui/user-avatar';
import { CommentMenu } from './comment-menu';

interface CommentCardProps {
  comment: Comment;
}

export const CommentCard = ({
  comment: { id, comment, createdAt, updatedAt, isBlocked, isDeleted, user },
}: CommentCardProps) => {
  return (
    <div className="p-2 space-y-4">
      <div className="flex items-center justify-between gap-3">
        <UserAvatar user={user} />
        <div className="flex-1 space-y-0.5">
          <Link
            href={profilesRoutes.profileId(user.id)}
            className="font-semibold text-sm"
          >
            {user.username}
          </Link>
          <div className="text-xs text-muted-foreground">
            {createdAt === updatedAt
              ? dateFormatter(createdAt)
              : `Оновлено ${dateFormatter(updatedAt)}`}
          </div>
        </div>
        <CommentMenu id={id} />
      </div>
      <p className="text-sm leading-5">
        {comment}. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Blanditiis fugit quis natus vel, aliquid placeat corrupti commodi et
        voluptatum
      </p>
    </div>
  );
};
