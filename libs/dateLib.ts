type YearMonth = { year: number; month: number };
type DayName = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';

const dayNames: DayName[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function makeDate({ year, month, day }: { year: number; month: number; day: number }) {
  return new Date(year, month - 1, day);
}

export type { YearMonth, DayName };
export { dayNames, makeDate };
