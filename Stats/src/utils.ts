export const dateStringToDate = (dateString: string): Date => {
  enum parts {
    "Year" = 2,
    "Month" = 1,
    "Day" = 0
  }

  const dateParts = dateString.split("/").map((value: string): number => {
    return parseInt(value);
  });

  return new Date(
    dateParts[parts.Year],
    dateParts[parts.Month] - 1,
    dateParts[parts.Day]
  );
};
