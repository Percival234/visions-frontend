import '@tanstack/react-query';

import type { APIError } from '@/api/api-error.type';

declare module '@tanstack/react-query' {
  interface Register {
    defaultError: APIError;
  }
}
