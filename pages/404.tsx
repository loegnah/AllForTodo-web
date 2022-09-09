import type { GetStaticProps } from 'next';

interface Props {
  errorPage: boolean;
}

function Error404({ errorPage }: Props) {
  return <div>Error</div>;
}

const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      errorPage: true,
    },
  };
};

export default Error404;
export { getStaticProps };
