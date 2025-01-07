import type {
  Article,
  ArticleCreate,
  ArticleUpdate,
} from '@/types/entities/article.type';
import type { GetOptions } from '@/types/utils/get-options.type';
import type { ResponseMessage } from '@/types/utils/response-message.type';
import type { ResponsePaginated } from '@/types/utils/response-paginated.type';

import { createSearchParams } from '@/helpers/searchParams/createSearchParams';

import { apiWithAuth } from '@/api/api-instance';

type GetManyArticlesOptions = GetOptions & {
  isPublished?: boolean;
};

class ArticlesService {
  // async getById(id: string): Promise<Article> {
  //   return (await apiWithAuth.get(`/articles/${id}}`)).data;
  // }
  // async getMany(options: GetManyArticlesOptions): ResponsePaginated<Article> {
  //   return (await apiWithAuth.get(`/articles?${createSearchParams(options)}`))
  //     .data;
  // }
  // async create(blogCreate: ArticleCreate): ResponseMessage {
  //   return (await apiWithAuth.post('/articles', blogCreate)).data;
  // }
  // async update(id: string, blogUpdate: BlogUpdate): ResponseMessage {
  //   return (await this.apiInstance.patch(`${this.path}/${id}`, blogUpdate))
  //     .data;
  // }
  // async like(id: string): Promise<void> {
  //   return (await this.apiInstance.patch(`${this.path}/${id}/like`)).data;
  // }
  // async delete(id: string): ResponseMessage {
  //   return (await this.apiInstance.delete(`${this.path}/${id}`)).data;
  // }
}

export const articlesService = new ArticlesService();
