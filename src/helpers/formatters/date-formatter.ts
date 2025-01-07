const defaultOptios: Intl.DateTimeFormatOptions = {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
};

export const dateFormatter = (
  date: string | Date,
  options?: Intl.DateTimeFormatOptions,
): string => new Date(date).toLocaleString('uk-UA', options || defaultOptios);
