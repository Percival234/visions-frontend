import axios, { type CreateAxiosDefaults } from 'axios';

import { authService } from '@/services/api-services/auth/auth.service';

import { useAuthStore } from '@/store/useAuth.store';

import { getErrorMessage } from '@/helpers/errors/getErrorMessage';

import type { APIError } from '@/api/api-error.type';

import { API_URL } from '@/constants/server-url.constant';

const options: CreateAxiosDefaults = {
  baseURL: `${API_URL}/api`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
};

const apiInstance = axios.create(options);

const apiWithAuth = axios.create(options);

apiWithAuth.interceptors.request.use((config) => {
  const accessToken = useAuthStore.getState().token;

  if (accessToken && config?.headers) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return config;
});

apiWithAuth.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    if (
      (error?.response?.status === 401 ||
        getErrorMessage(error) === 'Токен доступу недійсний' ||
        getErrorMessage(error) === 'Токен доступу відсутній') &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;

      try {
        const newToken = await authService.getNewToken();

        useAuthStore.getState().setToken(newToken);

        return apiWithAuth.request(originalRequest);
      } catch (error) {
        const err = error as APIError;

        if (
          getErrorMessage(err) === 'Токен недійсний' ||
          getErrorMessage(err) === 'Токен відсутній'
        )
          useAuthStore.getState().clearAuth();
        throw error;
      }
    }

    throw error;
  },
);

export { apiInstance, apiWithAuth };
