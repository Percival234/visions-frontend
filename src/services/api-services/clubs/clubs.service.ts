import type { Club, ClubWithoutOwner } from '@/types/entities/club.type';
import type {
  Membership,
  MembershipCreate,
  MembershipUpdate,
  MembershipWithoutUser,
} from '@/types/entities/membership.type';
import type { ResponseMessage } from '@/types/utils/response-message.type';

import { createSearchParams } from '@/helpers/searchParams/createSearchParams';

import { apiWithAuth } from '@/api/api-instance';

import type {
  GetManyClubsOptions,
  GetManyMembershipsOptions,
} from './clubs.service.types';

class ClubsService {
  async getClubById(id: string): Promise<Club> {
    return (await apiWithAuth.get(`/clubs/${id}`)).data;
  }

  async getManyClubs(
    options: GetManyClubsOptions,
  ): Promise<ClubWithoutOwner[]> {
    return (await apiWithAuth.get(`/clubs?${createSearchParams(options)}`))
      .data;
  }

  async createClub(clubCreate: FormData): Promise<Club> {
    return (
      await apiWithAuth.post('/clubs', clubCreate, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
    ).data;
  }

  async updateClub(id: string, clubUpdate: FormData): ResponseMessage {
    return (
      await apiWithAuth.patch(`/clubs/${id}`, clubUpdate, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
    ).data;
  }

  async deleteClub(id: string): ResponseMessage {
    return (await apiWithAuth.delete(`/clubs/${id}`)).data;
  }

  async joinClub(
    membershipCreate: MembershipCreate,
  ): Promise<MembershipWithoutUser | null> {
    return (await apiWithAuth.post('/memberships', membershipCreate)).data;
  }

  async getManyMemberships(
    options: GetManyMembershipsOptions,
  ): Promise<Membership[]> {
    return (
      await apiWithAuth.get(`/memberships?${createSearchParams(options)}`)
    ).data;
  }

  async updateMembership(
    id: string,
    membershipUpdate: MembershipUpdate,
  ): Promise<Membership> {
    return (await apiWithAuth.patch(`/memberships/${id}`, membershipUpdate))
      .data;
  }

  async deleteMembership(id: string): ResponseMessage {
    return (await apiWithAuth.delete(`/memberships/${id}`)).data;
  }
}

export const clubsService = new ClubsService();
