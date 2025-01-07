import type { Category } from './category.type';
import type { MembershipWithoutUser } from './membership.type';
import type { UserPreview } from './user.type';

export type Club = {
  id: string;
  name: string;
  description: string;
  categories: Category[];
  settings: ClubSettings;
  image: string;
  membership: MembershipWithoutUser | null;
  owner: UserPreview;
  ownerId: string;
  createdAt: string;
  updatedAt: string;
};

export type ClubWithoutOwner = Omit<Club, 'owner'>;

export type ClubPreview = Pick<Club, 'id' | 'name' | 'image' | 'categories'>;

export type ClubCreate = Pick<Club, 'name' | 'description'>; // TODO implement correct type for creation

export type ClubUpdate = Partial<Pick<Club, 'name' | 'description'>>; // TODO implement correct type for creation

export type ClubSettings = {
  id: string;
  isPrivate: boolean;
  createdAt: string;
  updatedAt: string;
};
