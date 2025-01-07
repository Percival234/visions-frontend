import type { UserPreview } from '@/types/entities/user.type';

export type Notification = {
  id: string;
  sender: UserPreview;
  userId: string;
  title: string;
  textHtml: string;
  textMarkdown: string;
  isRead: boolean;
  createdAt: string;
  updatedAt: string;
};

export type NotificationCreate = Pick<
  Notification,
  'textMarkdown' | 'title' | 'userId'
>;
export type NotificationUpdate = Partial<Pick<Notification, 'isRead'>>;
