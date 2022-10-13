type DateAndTime = { year: number; month: number; day: number; hour: number; minute: number };
type YearMonth = Pick<DateAndTime, 'year' | 'month'>;
type DayName = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';

const dayNames: DayName[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function makeDate(year: number, month: number, day: number) {
  return new Date(year, month - 1, day);
}

const getLastDay = ({ year, month }: { year: number; month: number }) => new Date(year, month, 0).getDate();

export type { YearMonth, DayName };
export { dayNames, makeDate, getLastDay };
