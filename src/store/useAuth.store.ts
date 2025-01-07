import { jwtDecode } from 'jwt-decode';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import type { UserRoles } from '@/types/enums/user-roles.enum';
import type { DecodedToken } from '@/types/utils/decoded-token.type';

type AuthStoreState = {
  user: { id: string; roles: UserRoles[] } | null | undefined;
  token: string | null;
};

type AuthStoreAction = {
  setToken(token: AuthStoreState['token']): void;
  setUser(user: AuthStoreState['user']): void;
  clearAuth(): void;
};

const initalState = {
  user: null,
  token: null,
};

export const useAuthStore = create<AuthStoreState & AuthStoreAction>()(
  immer((set) => ({
    ...initalState,
    setToken: (token) =>
      set((state) => {
        if (token) {
          const decoded = jwtDecode<DecodedToken>(token);

          if (decoded?.sub && decoded?.roles) {
            state.user = { id: decoded.sub, roles: decoded.roles };
          }
        }
        state.token = token;
      }),
    setUser: (user) =>
      set((state) => {
        state.user = user;
      }),
    clearAuth: () =>
      set((state) => {
        state.token = initalState.token;
        state.user = initalState.user;
      }),
  })),
);
