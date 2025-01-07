import type { ClubRole } from '@/types/enums/club-roles.enum';
import type { MembershipStatus } from '@/types/enums/membership-status.enum';
import type { SortOrders } from '@/types/enums/sort-order.enum';
import type { GetOptions } from '@/types/utils/get-options.type';

export type GetManyClubsOptions = GetOptions & {
  userId?: string;
  search?: string;
  categories?: string;
  isPrivate?: string;
  sortOrder?: SortOrders;
};

export type GetManyMembershipsOptions = GetOptions & {
  search?: string;
  clubId: string;
  status?: MembershipStatus;
  roles?: ClubRole;
};
