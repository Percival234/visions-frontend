import type { Visibility } from '@/types/enums/visibility.enum';

export type Settings = {
  id: string;
  profileVisibility: Visibility;
  galleryVisibility: Visibility;
  theme: 'dark' | 'light' | 'system';
  colorTheme: ''; // TODO implement correct type
  allowDownload: boolean;
  allowClubsPosts: boolean;
  allowFollowingsPosts: boolean;
  allowPopularPosts: boolean;
  createdAt: string;
  updatedAt: string;
};
