export type ResponsePaginated<T> = Promise<{
  data: T[];
  // currentPage: number;
  // totalPages: number;
  totalItems: number;
}>;
