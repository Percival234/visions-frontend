import Link from 'next/link';

import type { PostPreview } from '@/types/entities/post.type';

import { PostCategoryList } from '@/components/category/post-category-list';

import { postsRoutes } from '@/constants/pages.constant';

interface PostPreviewCardProps {
  post: PostPreview;
}

export const PostPreviewCard = ({
  post: {
    id,
    title,
    image: { src },
    categories,
  },
}: PostPreviewCardProps) => {
  return (
    <div className="group relative rounded-md overflow-hidden group bg-muted">
      <Link href={`${postsRoutes.postId(id)}`}>
        <img alt={title} src={src} />
      </Link>
      <div className="absolute bottom-0 left-0 z-20 p-2">
        <PostCategoryList categories={categories} />
      </div>
    </div>
  );
};
