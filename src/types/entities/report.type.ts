import type { UserPreview } from '@/types/entities/user.type';
import type { ReportTypes } from '@/types/enums/report-types.enum';

export type Report = {
  id: string;
  text: string;
  type: ReportTypes;
  isMarked: boolean;
  read: Date | string;
  userId: string;
  user: UserPreview & { email: string };
  createdAt: string;
  updatedAt: string;
};

export type ReportCreate = Pick<Report, 'text' | 'type'>;
export type ReportUpdate = Partial<Pick<Report, 'isMarked'>>;
