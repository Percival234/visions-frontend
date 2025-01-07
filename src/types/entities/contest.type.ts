import type { Image } from '@/types/entities/image.type';
import type { User } from '@/types/entities/user.type';

import type { Award } from './award.type';

export type ContestParticipant = {
  id: string;
  user: Pick<User, 'avatar' | 'username' | 'id'>;
  contestId: string;
  isBlocked: boolean;
  createAt: Date;
};

export type ContestImage = {
  id: string;
  image: Image;
  participant: ContestParticipant;
  status: 'approved' | 'rejected' | 'pending';
  createAt: Date;
};

export type ContestWinner = {
  id: string;
  award: Award;
  createAt: Date;
};

export type ContestResults = {
  id: string;
  contestId: string;
  winners: ContestWinner;
  createdAt: string;
};

export type Contest = {
  id: string;
  name: string;
  poster: string;
  descriptionHtml: string;
  descriptionMarkdown: string;
  results?: ContestResults;
  dateStart: Date;
  dateEnd: Date;
  createdAt: string;
  updatedAt: string;
};

export type ContestCreate = Pick<
  Contest,
  'dateStart' | 'dateEnd' | 'descriptionMarkdown' | 'name'
>;
export type ContestUpdate = Partial<ContestCreate>;

// TODO implement logic for contests images and participants filtration
