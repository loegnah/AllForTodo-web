import tw, { css, styled } from 'twin.macro';
import { getCategoryColor } from '/controllers/categoryManager';
import type Job from '/structures/Job';

type JobItemProps = {
  jobData: Job;
  isMultiDayJob?: boolean;
};

function JobItem({ jobData, isMultiDayJob }: JobItemProps) {
  return (
    <Item color={getCategoryColor(jobData.category as any)} isMultiDayJob={!!isMultiDayJob}>
      {jobData.title}
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
