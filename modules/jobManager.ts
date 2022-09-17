import { atom } from 'recoil';
import { makeDate } from '/libs/dateLib';

type Job = {
  title: string;
  date?: Date;
  comment?: string;
  category?: string;
};

const jobAtom = atom<Job[]>({
  key: 'jobs',
  default: [
    {
      title: 'Job A',
      comment: 'Job A comment',
      category: 'categoryA',
      date: makeDate({ year: 2022, month: 12, day: 11 }),
    },
    {
      title: 'Job B',
      comment: 'Job B comment',
      category: 'categoryB',
      date: makeDate({ year: 2022, month: 12, day: 12 }),
    },
  ],
});

export { jobAtom };
export type { Job };
