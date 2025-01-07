import type {
  NotificationCreate,
  NotificationUpdate,
} from '@/types/entities/notification.type';
import type { ResponseMessage } from '@/types/utils/response-message.type';

import { apiWithAuth } from '@/api/api-instance';

class NotificationsService {
  async getMany(): Promise<Notification[]> {
    return (await apiWithAuth.get(`/notifications`)).data;
  }

  async create(notificationCreate: NotificationCreate): ResponseMessage {
    return (await apiWithAuth.post('/notifications', notificationCreate)).data;
  }

  async update(
    id: string,
    notificationUpdate: NotificationUpdate,
  ): ResponseMessage {
    return (await apiWithAuth.patch(`/notifications/${id}`, notificationUpdate))
      .data;
  }

  async delete(id: string): ResponseMessage {
    return (await apiWithAuth.delete(`/notifications/${id}`)).data;
  }

  async deleteMany(): ResponseMessage {
    return (await apiWithAuth.delete(`/notifications`)).data;
  }
}

export const notificationsService = new NotificationsService();
