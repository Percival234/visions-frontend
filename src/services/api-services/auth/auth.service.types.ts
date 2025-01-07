import type { User } from '@/types/entities/user.type';

export type AuthSignIn = Pick<User, 'email'> & {
  password: string;
};

export type AuthSignUp = Pick<User, 'email' | 'username'> & {
  password: string;
};
