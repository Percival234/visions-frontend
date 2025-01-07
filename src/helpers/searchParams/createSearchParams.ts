export const createSearchParams = (
  params: Record<string, string | number | boolean | (string | number)[]> = {},
) => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    searchParams.append(
      key,
      Array.isArray(value) ? value.join(',') : value.toString(),
    );
  });

  return searchParams.toString();
};
