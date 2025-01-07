// import type {
//   Collection,
//   CollectionCreate,
//   CollectionUpdate,
// } from '@/types/entities/collection.type';
// import type { SortOrders } from '@/types/enums/sort-order.enum';
// import type { GetOptions } from '@/types/utils/get-options.type';
// import type { ResponseMessage } from '@/types/utils/response-message.type';
// import type { ResponsePaginated } from '@/types/utils/response-paginated.type';

// import { ApiService } from '@/services/api-services/api-service';

// import { createSearchParams } from '@/helpers/searchParams/createSearchParams';

// type GetManyCollectionsOptions = GetOptions & {
//   search?: string;
//   userId?: string;
//   sortMethod?: 'popularity' | 'createdAt' | 'alphabet';
//   sortOrder?: SortOrders;
//   popular?: boolean;
//   isPrivate?: boolean;
//   isDeleted?: boolean;
//   // todo think about sorting for posts
// };

// class CollectionsService extends ApiService {
//   constructor(private path = '/collections') {
//     super();
//   }

//   async getById(id: string): Promise<Collection> {
//     return (await this.apiInstance.get(`${this.path}/${id}}`)).data;
//   }

//   async getMany(
//     options: GetManyCollectionsOptions,
//   ): ResponsePaginated<Collection> {
//     return (
//       await this.apiInstance.get(`${this.path}?${createSearchParams(options)}`)
//     ).data;
//   }

//   async create(collectionCreate: CollectionCreate): ResponseMessage {
//     return (await this.apiInstance.post(this.path, collectionCreate)).data;
//   }

//   async update(
//     id: string,
//     collectionUpdate: CollectionUpdate,
//   ): ResponseMessage {
//     return (
//       await this.apiInstance.patch(`${this.path}/${id}`, collectionUpdate)
//     ).data;
//   }

//   async like(id: string): Promise<void> {
//     return (await this.apiInstance.patch(`${this.path}/${id}/like`)).data;
//   }

//   async delete(id: string): ResponseMessage {
//     return (await this.apiInstance.delete(`${this.path}/${id}`)).data;
//   }

//   async deleteMany(ids: string[]): ResponseMessage {
//     return (
//       await this.apiInstance.delete(
//         `${this.path}?${createSearchParams({ ids })}`,
//       )
//     ).data;
//   }

//   // todo implement deleting logic for admin and for user
// }

// export const collectionsService = new CollectionsService();
