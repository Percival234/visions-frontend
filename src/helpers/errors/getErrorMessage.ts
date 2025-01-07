import type { APIError } from '@/api/api-error.type';

export const getErrorMessage = (error: APIError) => {
  const data = error?.response?.data;

  if (data) {
    return Array.isArray(data?.message)
      ? data.message[0]
      : data.message || 'Сталася невідома помилка';
  }

  return 'Виникла помилка. Спробуйте ще раз пізніше.';
};
