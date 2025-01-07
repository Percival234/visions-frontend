import type { ResponseMessage } from '@/types/utils/response-message.type';

import type {
  AuthSignIn,
  AuthSignUp,
} from '@/services/api-services/auth/auth.service.types';

import { useAuthStore } from '@/store/useAuth.store';

import { apiInstance, apiWithAuth } from '@/api/api-instance';

class AuthService {
  // async getRoles(token: string): Promise<UserRoles[]> {
  //   const response = (await apiInstance.post('/users/roles', token));

  //   return response.data;
  // }

  async signIn(signInData: AuthSignIn): Promise<string> {
    const response = (await apiInstance.post('/users/sign-in', signInData))
      .data;

    return response?.accessToken;
  }

  async signUp(signUpData: AuthSignUp): Promise<string> {
    const response = (await apiInstance.post('/users/sign-up', signUpData))
      .data;

    return response.accessToken;
  }

  async logout(): ResponseMessage {
    const response = (await apiWithAuth.post('/users/logout')).data;

    if (response) {
      useAuthStore.getState().clearAuth();
    }

    return response;
  }

  async getNewToken() {
    const response = (await apiInstance.get('/users/access-token')).data;

    const token = response?.accessToken;

    if (token) {
      useAuthStore.getState().setToken(token);
    }

    return token;
  }
}

export const authService = new AuthService();
