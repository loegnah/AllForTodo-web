type YearMonth = { year: number; month: number };
type DayName = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';

const dayNames: DayName[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const makeDate = ({ year, month, day }: { year: number; month: number; day: number }) => new Date(year, month - 1, day);

const getLastDate = ({ year, month }: { year: number; month: number }) => new Date(year, month, 0).getDate();

export type { YearMonth, DayName };
export { dayNames, makeDate, getLastDate };
