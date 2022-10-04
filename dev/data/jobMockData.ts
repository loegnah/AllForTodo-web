import { makeDate } from '/libs/dateLib';

const jobMockData = [
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
  {
    title: 'Job C',
    comment: 'Job A comment',
    category: 'categoryA',
    dates: [makeDate({ year: 2022, month: 8, day: 21 })],
  },
  {
    title: 'Job D',
    comment: 'Job A comment',
    category: 'categoryA',
    dates: [makeDate({ year: 2021, month: 8, day: 21 })],
  },
];

export { jobMockData };
