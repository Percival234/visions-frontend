'use client';

import Image from 'next/image';
import Link from 'next/link';

import type { Post } from '@/types/entities/post.type';

import { Button } from '@/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/ui/card';
import { Icon } from '@/ui/icon';
import { Paragraph } from '@/ui/paragraph';
import { SROnly } from '@/ui/sr-only';
import { Title } from '@/ui/title';
import { UserAvatar } from '@/ui/user-avatar';

import { PostCategoryList } from '@/components/category/post-category-list';
import { PostCommentSection } from '@/components/comment/comment-sections/post-comment-section';
import { PostMenu } from '@/components/post/post-menu';
import { PostBlockedState } from '@/components/post/post-state/post-blocked-state';
import { PostDeletedState } from '@/components/post/post-state/post-deleted-state';

import { useToggle } from '@/hooks/useToggle';

import { dateFormatter } from '@/helpers/formatters/date-formatter';
import { numberFormatter } from '@/helpers/formatters/number-formatter';

import { profilesRoutes } from '@/constants/pages.constant';

import { cn } from '@/libs/cn/cn';

interface PostCardProps {
  post: Post;
}

export const PostCard = ({
  post: {
    id,
    categories,
    likesCount,
    title,
    description,
    createdAt,
    isBlocked,
    isDeleted,
    image: { src, width, height },
    user,
  },
}: PostCardProps) => {
  const { state, toggle } = useToggle();
  return (
    <Card className="border-none @lg:border @lg:border-solid">
      <CardHeader className="flex-row justify-between">
        <div className="flex gap-3">
          <UserAvatar size="lg" user={user} />
          <div className="flex flex-col justify-center gap-1">
            <Link href={profilesRoutes.profileId(user.id)}>
              {user.username}
            </Link>
            <div className="text-xs @lg:text-sm text-muted-foreground">
              Опубліковано:{' '}
              {dateFormatter(createdAt, {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </div>
          </div>
        </div>
        <PostMenu id={id} />
      </CardHeader>
      <CardContent className="p-0 pb-3">
        {isBlocked ? (
          <PostBlockedState />
        ) : isDeleted ? (
          <PostDeletedState />
        ) : (
          <>
            <div className="px-3 @lg:px-0">
              <Title className="mb-2">{title}</Title>
              <Paragraph className="mb-4">
                {description}.{' '}
                <Button
                  variant="link"
                  // className="text-primary font-medium"
                >
                  Читати далі...
                </Button>
              </Paragraph>
            </div>
            <div className="relative flex justify-center @lg:rounded-sm overflow-hidden">
              <Image
                src={src}
                alt={description}
                width={width}
                height={height}
              />
              <div className="flex justify-between items-end absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent h-32 p-3">
                <PostCategoryList categories={categories} />
                <div className="flex gap-2.5 items-center">
                  <div className="flex items-center gap-1 text-lg font-semibold">
                    {numberFormatter(likesCount)}
                  </div>
                  <Button
                    size="icon"
                    className="[&_svg]:size-7 bg-white text-black hover:bg-white/80"
                  >
                    <Icon iconName="heart" className="text-fuchsia-600" />
                    <SROnly>Додати до вподобаних</SROnly>
                  </Button>
                  <Button
                    size="icon"
                    className="[&_svg]:size-6 bg-white text-black hover:bg-white/80"
                  >
                    <Icon iconName="savedPlus" />
                    <SROnly>Зберегти</SROnly>
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </CardContent>
      <CardFooter className="flex-col items-center">
        <Button
          variant={state ? 'secondary' : 'ghost'}
          size="sm"
          onClick={toggle}
          className={cn('underline', {
            'bg-secondary/50': state,
          })}
        >
          {state ? 'Приховати коментарі' : `Показати коментарі`}
        </Button>
        {state && <PostCommentSection postId={id} />}
      </CardFooter>
    </Card>
  );
};
