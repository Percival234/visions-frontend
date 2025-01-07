import type { AxiosError } from 'axios';

type ErrorResponseData = {
  message: string | string[];
  error: string;
  statusCode: number;
};

export type APIError = AxiosError<ErrorResponseData>;
