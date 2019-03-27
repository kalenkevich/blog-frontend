export const DEFAULT_DATE_LOCALE = 'ru-RU';

export const getFormattedDate = (date) => {
  const dateFormatter = new Intl.DateTimeFormat(DEFAULT_DATE_LOCALE);

  return dateFormatter.format(new Date(date));
};
