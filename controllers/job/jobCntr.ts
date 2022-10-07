import { atom } from 'recoil';
import { jobMockData } from '../../dev/data/jobMockData';

type JobData = {
  title: string;
  dates?: Date[];
  comment?: string;
  category?: string;
};

const jobAtoms = atom<JobData[]>({
  key: 'jobAtoms',
  default: jobMockData,
});

export { jobAtoms };
export type { JobData };
