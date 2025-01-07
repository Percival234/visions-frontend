import type {
  Image,
  ImageCreate,
  ImageUpdate,
} from '@/types/entities/image.type';
import type { SortOrders } from '@/types/enums/sort-order.enum';
import type { GetOptions } from '@/types/utils/get-options.type';
import type { ResponseMessage } from '@/types/utils/response-message.type';
import type { ResponsePaginated } from '@/types/utils/response-paginated.type';

import { createSearchParams } from '@/helpers/searchParams/createSearchParams';

type GetManyImagesOptions = GetOptions & {
  search?: string;
  userId?: string;
  categories?: string[];
  sortMethod?: 'popularity' | 'createdAt' | 'alphabet';
  sortOrder?: SortOrders;
  popular?: boolean;
  isPrivate?: boolean;
  isDeleted?: boolean;
  // todo think about sorting for posts
};

// class ImagesService extends ApiService {
//   constructor(private path = '/images') {
//     super();
//   }

//   async getById(id: string): Promise<Image> {
//     return (await this.apiInstance.get(`${this.path}/${id}}`)).data;
//   }

//   async getMany(options: GetManyImagesOptions): ResponsePaginated<Image> {
//     return (
//       await this.apiInstance.get(`${this.path}?${createSearchParams(options)}`)
//     ).data;
//   }

//   async create(imageCreate: ImageCreate): ResponseMessage {
//     return (await this.apiInstance.post(this.path, imageCreate)).data;
//   }

//   async update(id: string, imageUpdate: ImageUpdate): ResponseMessage {
//     return (await this.apiInstance.patch(`${this.path}/${id}`, imageUpdate))
//       .data;
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

// export const imagesService = new ImagesService();
