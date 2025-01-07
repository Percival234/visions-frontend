import type { ClubRoles } from '../enums/club-roles.enum';
import type { MembershipStatus } from '../enums/membership-status.enum';
import type { UserPreview } from './user.type';

export type Membership = {
  id: string;
  roles: ClubRoles[];
  status: MembershipStatus;
  user: UserPreview;
  clubId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
};

export type MembershipWithoutUser = Omit<Membership, 'user'>;

export type MembershipCreate = Pick<Membership, 'clubId'>;
export type MembershipUpdate = Partial<Pick<Membership, 'roles' | 'status'>>;
