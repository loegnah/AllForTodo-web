import { atom } from 'recoil';
import { jobMockData } from '../../dev/data/jobMockData';
import type Job from '/structures/Job';

const jobAtoms = atom<Job[]>({
  key: 'jobAtoms',
  default: jobMockData,
});

export { jobAtoms };
