import { styled } from 'twin.macro';
import JobItem from './JobItem';
import type { Job } from '../../../controllers/jobManager';

type Props = {};

const jobs: Job[] = [{ title: 'Job A', comment: 'Job A comment', category: 'categoryA' }];

function JobContainer({}: Props) {
  return (
    <Container>
      {jobs.map((job, key) => (
        <JobItem key={key} job={job} />
      ))}
    </Container>
  );
}

const Container = styled.div();

export default JobContainer;