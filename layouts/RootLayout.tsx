import { ReactNode } from 'react';
import { NextPage } from 'next';

const RootLayout: NextPage<Props> = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

interface Props {
  children: ReactNode;
}

export default RootLayout;
