import _, { range } from 'lodash';
import { GetRecoilValue, RecoilValueReadOnly, selectorFamily } from 'recoil';
import { jobAtoms } from './jobCntr';
import type { JobData } from '/structures/Job';
import type { YearMonth } from '/libs/dateLib';
import { getLastDate } from '/libs/dateLib';

type JobFilter = {
  jobSelectorKey: string;
};

function checkInDate(start: Date, end: Date) {}

function selectorGetterA({ year, month }: YearMonth) {
  return ({ get }: { get: GetRecoilValue }) => {
    const jobsByDate: JobData[][] = [...range(getLastDate({ year, month })).map(() => [])];
    get(jobAtoms)
      .filter(matchJobsByYM({ year, month }))
      .forEach((job) => {
        job.dates?.forEach((jobDate) => jobsByDate[jobDate.getDate()].push(job));
      });
    return jobsByDate;
  };
}

function matchJobsByYM({ year, month }: YearMonth) {
  return ({ dates }: JobData) =>
    dates &&
    dates.filter(
      (jobDate) =>
        jobDate.start.getFullYear() <= year &&
        year <= end.getFullYear() &&
        jobDate.start.getMonth() <= month - 1 &&
        month - 1 <= end.getMonth()
    ).length > 0;
}

const jobSelectorMap = {
  selector1: selectorFamily({
    key: 'selector1',
    get: selectorGetterA,
  }),

  selector2: selectorFamily({
    key: 'selector2',
    get: selectorGetterA,
  }),
};

function getJobSelectorByFilter({ jobSelectorKey }: JobFilter): (param: YearMonth) => RecoilValueReadOnly<JobData[][]> {
  return _.get(jobSelectorMap, jobSelectorKey, jobSelectorMap['selector1']);
}

export { getJobSelectorByFilter };
export type { JobFilter };
