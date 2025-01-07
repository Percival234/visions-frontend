import type { UserRoles } from '@/types/enums/user-roles.enum';

export type DecodedToken = {
  exp: number;
  ait: number;
  sub: string;
  roles: UserRoles[];
};
