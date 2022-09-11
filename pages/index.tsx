import SquareButtonA from '/components/buttons/SquareButtonA';
import Link from 'next/link';
import styled from '@emotion/styled';

function Home() {
  return (
    <div>
      <SquareButtonA />
      <div>
        <span>abc</span>
        <Link href={'www.google.com'}>google</Link>
        <Button>Change Theme</Button>
      </div>
    </div>
  );
}

const Button = styled.button``;

export default Home;
