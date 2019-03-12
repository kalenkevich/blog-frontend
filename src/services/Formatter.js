export const getFormattedDate = (date) => {
  const dateFormatter = new Intl.DateTimeFormat('ru-Ru');

  return dateFormatter.format(new Date(date));
};
