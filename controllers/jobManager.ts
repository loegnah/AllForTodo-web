import { atom, selector, selectorFamily } from 'recoil';
import { makeDate } from '/libs/dateLib';

type JobData = {
  title: string;
  dates?: Date[];
  comment?: string;
  category?: string;
};

const jobAtoms = atom<JobData[]>({
  key: 'jobAtoms',
  default: [
    {
      title: 'Job A',
      comment: 'Job A comment',
      category: 'categoryA',
      dates: [makeDate({ year: 2022, month: 12, day: 11 })],
    },
    {
      title: 'Job B',
      comment: 'Job B comment',
      category: 'categoryB',
      dates: [makeDate({ year: 2022, month: 12, day: 12 })],
    },
  ],
});

const jobSelector = selectorFamily({
  key: 'jobSelector',
  get:
    ({ year, month }: { year: number; month: number }) =>
    ({ get }) => {
      return get(jobAtoms).filter(
        ({ dates }) =>
          dates && dates.filter((date) => date.getFullYear() === year && date.getMonth() === month - 1).length > 0
      );
    },
});

export { jobAtoms, jobSelector };
export type { JobData };
