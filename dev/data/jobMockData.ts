import { makeDate } from '/libs/dateLib';
import Job from '/structures/Job';

const jobMockData = [
  new Job({
    title: 'Job A',
    comment: 'Job A comment',
    category: 'categoryA',
    dates: [{ start: makeDate(2022, 12, 11), end: makeDate(2022, 12, 11) }],
  }),
  new Job({
    title: 'Job B',
    comment: 'Job B comment',
    category: 'categoryB',
    dates: [{ start: makeDate(2022, 12, 12), end: makeDate(2022, 12, 15) }],
  }),
  new Job({
    title: 'Job C',
    comment: 'Job A comment',
    category: 'categoryB',
    dates: [{ start: makeDate(2022, 8, 21), end: makeDate(2022, 8, 21) }],
  }),
  new Job({
    title: 'Job D',
    comment: 'Job A comment',
    category: 'categoryA',
    dates: [{ start: makeDate(2021, 8, 21), end: makeDate(2021, 8, 21) }],
  }),
];

export { jobMockData };
