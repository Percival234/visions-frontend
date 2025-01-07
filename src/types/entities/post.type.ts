import type { Category } from '@/types/entities/category.type';
import type { Image } from '@/types/entities/image.type';
import type { UserPreview } from '@/types/entities/user.type';
import type { Visibility } from '@/types/enums/visibility.enum';

type PostImage = Pick<Image, 'id' | 'src' | 'width' | 'height'>;

export type Post = {
  id: string;
  user: UserPreview;
  image: PostImage;
  categories: Category[];
  title: string;
  isBlocked: boolean;
  isDeleted: boolean;
  visibility: Visibility;
  description: string;
  likesCount: number;
  createdAt: string;
  updatedAt: string;
};
export type PostPreview = Pick<Post, 'id' | 'title' | 'categories' | 'image'>;

export type PostCreate = Pick<Post, 'description' | 'title'>;

export type PostUpdate = Partial<PostCreate>;
