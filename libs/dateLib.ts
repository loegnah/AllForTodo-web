const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function makeDate({ year, month, day }: { year: number; month: number; day: number }) {
  return new Date(year, month - 1, day);
}

export { dayNames, makeDate };
