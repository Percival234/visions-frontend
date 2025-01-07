import type { Profile } from '@/types/entities/profile.type';
import type {
  PasswordUpdate,
  User,
  UserUpdate,
} from '@/types/entities/user.type';
import type { SortOrders } from '@/types/enums/sort-order.enum';
import type { GetOptions } from '@/types/utils/get-options.type';
import type { ResponseMessage } from '@/types/utils/response-message.type';
import type { ResponsePaginated } from '@/types/utils/response-paginated.type';

import { createSearchParams } from '@/helpers/searchParams/createSearchParams';

import { apiWithAuth } from '@/api/api-instance';

type GetManyUsersOptions = GetOptions & {
  search?: string;
  isBlocked?: boolean;
  isDeleted?: boolean;
  sortMethod?: 'username' | 'createdAt';
  sortOrder?: SortOrders;
};

type DeleteManyUsersOptions = {
  ids: string[];
  isDeleted?: boolean;
};

class UsersService {
  async getById(id: string): Promise<User> {
    return (await apiWithAuth.get(`/users/${id}`)).data;
  }

  async getProfileById(id: string): Promise<Profile> {
    return (await apiWithAuth.get(`/users/profile/${id}`)).data;
  }

  async getProfile(): Promise<Profile> {
    return (await apiWithAuth.get(`/users/profile`)).data;
  }

  async getMany(options: GetManyUsersOptions): ResponsePaginated<User> {
    return (await apiWithAuth.get(`/users?${createSearchParams(options)}`))
      .data;
  }

  async update(
    id: string,
    userUpdate: FormData | UserUpdate | PasswordUpdate,
  ): ResponseMessage {
    return (await apiWithAuth.patch(`/users/${id}`, userUpdate)).data;
  }

  async delete(id: string): ResponseMessage {
    return (await apiWithAuth.delete(`/users/${id}`)).data;
  }

  async deleteMany(options: DeleteManyUsersOptions): ResponseMessage {
    return (await apiWithAuth.delete(`/users?${createSearchParams(options)}`))
      .data;
  }
}

export const usersService = new UsersService();
