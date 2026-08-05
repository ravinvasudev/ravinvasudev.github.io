export function formatMonth(dateText: string | null): string {
  if (!dateText) {
    return "Present";
  }

  const [year, month] = dateText.split("-").map(Number);
  const date = new Date(year, month - 1, 1);

  return date.toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export function formatPeriod(
  startDate: string,
  endDate: string | null,
): string {
  return `${formatMonth(startDate)} - ${formatMonth(endDate)}`;
}

export function formatPostDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
