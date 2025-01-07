import type { Post } from '@/types/entities/post.type';
import type { ResponseMessage } from '@/types/utils/response-message.type';

import { createSearchParams } from '@/helpers/searchParams/createSearchParams';

import { apiWithAuth } from '@/api/api-instance';

import type { GetManyPostsOptions } from './posts.service.types';

class PostsService {
  async getById(id: string): Promise<Post> {
    return (await apiWithAuth.get(`/posts/${id}`)).data;
  }

  async getMany(options: GetManyPostsOptions): Promise<Post[]> {
    return (await apiWithAuth.get(`/posts?${createSearchParams(options)}`))
      .data;
  }

  async createPost(postCreate: FormData): ResponseMessage {
    return (
      await apiWithAuth.post('/posts', postCreate, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
    ).data;
  }

  async updatePost(id: string, postUpdate: FormData): ResponseMessage {
    return (await apiWithAuth.patch(`/posts/${id}`, postUpdate)).data;
  }

  // async like(id: string): Promise<void> {
  //   return (await this.apiInstance.patch(`${this.path}/${id}/like`)).data;
  // }

  async deletePost(id: string): ResponseMessage {
    return (await apiWithAuth.delete(`/posts/${id}`)).data;
  }
}

export const postsService = new PostsService();
