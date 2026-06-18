export function formatDateRange(start: string, end: string): string {
  return `${start} — ${end}`;
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
