import _ from 'lodash';
import { GetRecoilValue, RecoilValueReadOnly, selectorFamily } from 'recoil';
import { jobAtoms } from './jobCntr';
import type { YearMonth } from '/libs/dateLib';
import { getLastDay } from '/libs/dateLib';
import type Job from '/structures/Job';

type JobFilter = {
  jobSelectorKey: string;
};

function checkInDate(start: Date, end: Date) {}

function selectorGetterA({ year, month }: YearMonth) {
  return ({ get }: { get: GetRecoilValue }) => {
    const jobsByDate: Job[][] = [..._.range(getLastDay({ year, month })).map(() => [])];
    const firstDateInMonth = new Date(year, month, 1);
    const lastDateInMonth = new Date(year, month, getLastDay({ year, month }));
    get(jobAtoms)
      .filter(matchJobsByYM({ year, month }))
      .forEach((job) => {
        job.dates?.forEach(({ start, end }) => {
          const startDay = (start < firstDateInMonth ? firstDateInMonth : start).getDate();
          const endDay = (lastDateInMonth < end ? lastDateInMonth : end).getDate();
          _.range(startDay, endDay + 1).forEach((curDay) => jobsByDate[curDay].push(job));
        });
      });
    return jobsByDate;
  };
}

function matchJobsByYM({ year, month }: YearMonth) {
  const lastDay = getLastDay({ year, month });
  return ({ dates }: Job) =>
    dates &&
    dates.filter(({ start, end }) => start <= new Date(year, month, lastDay) && end >= new Date(year, month, 1))
      .length > 0;
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

function getJobSelectorByFilter({ jobSelectorKey }: JobFilter): (param: YearMonth) => RecoilValueReadOnly<Job[][]> {
  return _.get(jobSelectorMap, jobSelectorKey, jobSelectorMap['selector1']);
}

export { getJobSelectorByFilter };
export type { JobFilter };
