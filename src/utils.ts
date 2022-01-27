export const dateStringToDate = (dateString: string): Date => {
  // 28/10/2015 - DD/MM/YYYY

  const dateInfo = dateString
      .trim()
      .split('/')
      .map((value: string): number => parseInt(value)),
    day = dateInfo[0],
    month = dateInfo[1] - 1,
    year = dateInfo[2];

  return new Date(day, month, year);
};
