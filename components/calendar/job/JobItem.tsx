import { css, styled } from 'twin.macro';
import type { Job } from '../../../controllers/jobManager';
import { getCategoryColor } from '../../../controllers/categoryManager';

type JobItemProps = {
  job: Job;
};

function JobItem({ job }: JobItemProps) {
  return <Item color={getCategoryColor(job.category as any)}>{job.title}</Item>;
}

const Item = styled.div<{ color: string }>(
  ({ color }) => css`
    background-color: ${color};
  `
);

export default JobItem;
