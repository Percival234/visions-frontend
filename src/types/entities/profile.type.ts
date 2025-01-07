import type { Settings } from '@/types/entities/settings.type';
import type { User } from '@/types/entities/user.type';

export type Profile = User & {
  settings: Settings;
};
