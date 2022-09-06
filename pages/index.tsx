import SquareButtonA from '/components/buttons/SquareButtonA';
import Link from 'next/link';

function Home() {
  return (
    <div>
      <SquareButtonA />
      <div>
        <span>abc</span>
        <Link href={'www.google.com'}>google</Link>
      </div>
    </div>
  );
}

export default Home;
