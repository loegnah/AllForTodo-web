import _, { range } from 'lodash';
import { RecoilValueReadOnly, selectorFamily } from 'recoil';
import { jobAtoms, JobData } from './jobCntr';
import type { YearMonth } from '/libs/dateLib';
import { getLastDate } from '/libs/dateLib';

type JobFilter = {
  jobSelectorKey: string;
};

const matchYearMonth =
  ({ year, month }: YearMonth) =>
  ({ dates }: JobData) =>
    dates && dates.filter((date) => date.getFullYear() === year && date.getMonth() === month - 1).length > 0;

const jobSelectorMap = {
  selector1: selectorFamily({
    key: 'selector1',
    get:
      ({ year, month }: YearMonth) =>
      ({ get }) => {
        const jobsByDate: JobData[][] = [...range(getLastDate({ year, month })).map(() => [])];
        get(jobAtoms)
          .filter(matchYearMonth({ year, month }))
          .forEach((job) => {
            job.dates?.forEach((jobDate) => jobsByDate[jobDate.getDate()].push(job));
          });
        return jobsByDate;
      },
  }),

  selector2: selectorFamily({
    key: 'selector2',
    get:
      ({ year, month }: YearMonth) =>
      ({ get }) => {
        const jobsByDate: JobData[][] = [...range(getLastDate({ year, month })).map(() => [])];
        get(jobAtoms)
          .filter(matchYearMonth({ year, month }))
          .forEach((job) => {
            job.dates?.forEach((jobDate) => jobsByDate[jobDate.getDate()].push(job));
          });
        return jobsByDate;
      },
  }),
};

const getJobSelectorByFilter = ({
  jobSelectorKey,
}: JobFilter): ((param: YearMonth) => RecoilValueReadOnly<JobData[][]>) =>
  _.get(jobSelectorMap, jobSelectorKey, jobSelectorMap['selector1']);

export { getJobSelectorByFilter };
export type { JobFilter };
