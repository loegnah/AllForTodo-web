import type { Job } from '../modules/jobManager';

function getJobOnMonth(jobs: Job[], { year, month }: { year: number; month: number }) {
  return jobs.filter((j) => j.date).filter((j) => j.date!.getFullYear() === year && j.date!.getMonth() === month);
}

export { getJobOnMonth };
