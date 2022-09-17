import styled from '@emotion/styled';
import type { Job } from '../../../modules/jobManager';
import { getCategoryColor } from '../../../modules/categoryManager';

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
