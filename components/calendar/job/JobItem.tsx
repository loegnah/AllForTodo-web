import styled from '@emotion/styled';
import type { Job } from '../../../controllers/jobManager';
import { getCategoryColor } from '../../../controllers/categoryManager';

type JobItemProps = {
  job: Job;
};

function JobItem({ job }: JobItemProps) {
  return <Item color={getCategoryColor(job.category as any)}>{job.title}</Item>;
}

const Item = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
`;

export default JobItem;
