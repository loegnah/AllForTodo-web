import tw, { css, styled } from 'twin.macro';
import type { JobData } from '../../../controllers/jobManager';
import { getCategoryColor } from '../../../controllers/categoryManager';

type JobItemProps = {
  job: JobData;
  isMultiDayJob?: boolean;
};

function JobItem({ job, isMultiDayJob }: JobItemProps) {
  return (
    <Item color={getCategoryColor(job.category as any)} isMultiDayJob={!!isMultiDayJob}>
      {job.title}
    </Item>
  );
}

const Item = styled.li<{ color: string; isMultiDayJob: boolean }>(
  tw`px-2 py-0.5 rounded-md text-xs mx-2`,
  ({ color }) => css`
    background-color: ${color};
  `,
  ({ isMultiDayJob }) => isMultiDayJob && tw`rounded-none mx-0`
);

export default JobItem;
