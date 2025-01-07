import type { Contest } from '@/types/entities/contest.type';
import type { GetOptions } from '@/types/utils/get-options.type';
import type { ResponseMessage } from '@/types/utils/response-message.type';
import type { ResponsePaginated } from '@/types/utils/response-paginated.type';

import { createSearchParams } from '@/helpers/searchParams/createSearchParams';

import { apiWithAuth } from '@/api/api-instance';

type GetManyContestsOptions = GetOptions;

class ContestsService {
  async getById(id: string): Promise<Contest> {
    return (await apiWithAuth.get(`/contests/${id})}`)).data;
  }

  async getMany(options: GetManyContestsOptions): ResponsePaginated<Comment> {
    return (await apiWithAuth.get(`/contests?${createSearchParams(options)}`))
      .data;
  }

  async create(contestCreate: FormData): ResponseMessage {
    return await apiWithAuth.post('/contests', { body: contestCreate }).data;
  }

  // async update(id: string, contestUpdate: FormData): ResponseMessage {
  //   return await apiWithAuth.patch(`/contests/${id}`, { body: contestUpdate })
  //     .data;
  // }

  async delete(id: string): ResponseMessage {
    return (await apiWithAuth.delete(`/contests/${id}`)).data;
  }
}

export const contestsService = new ContestsService();
