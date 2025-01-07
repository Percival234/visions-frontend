import type { UserRoles } from '@/types/enums/user-roles.enum';

export type User = {
  id: string;
  email: string;
  avatar: string;
  username: string;
  location: string;
  quote: string;
  roles: UserRoles[];
  isDeleted: boolean;
  isBlocked: boolean;
  createdAt: string;
  updatedAt: string;
};

export type UserPreview = Pick<
  User,
  'id' | 'avatar' | 'username' | 'isBlocked' | 'isDeleted'
>;

export type UserUpdate = Partial<
  Pick<
    User,
    'email' | 'avatar' | 'isDeleted' | 'username' | 'isBlocked' | 'roles'
  >
>;

// TODO qoute to about
