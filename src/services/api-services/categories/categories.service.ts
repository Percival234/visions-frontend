import type {
  Category,
  CategoryCreate,
  CategoryUpdate,
} from '@/types/entities/category.type';
import type { ResponseMessage } from '@/types/utils/response-message.type';

import { apiWithAuth } from '@/api/api-instance';

class CategoriesService {
  async getManyCategories(): Promise<Category[]> {
    return (await apiWithAuth.get('/categories')).data;
  }

  async createCategory(categoryCreate: CategoryCreate): ResponseMessage {
    return (await apiWithAuth.post('/categories', categoryCreate)).data;
  }

  async updateCategory(
    id: string,
    categoryUpdate: CategoryUpdate,
  ): ResponseMessage {
    return (await apiWithAuth.patch(`/categories/${id}`, categoryUpdate)).data;
  }

  async deleteCategory(id: string): ResponseMessage {
    return (await apiWithAuth.delete(`/categories/${id}`)).data;
  }
}

export const categoriesService = new CategoriesService();
