import styled from '@emotion/styled';
import type { NextPage } from 'next';
import type { ReactNode } from 'react';
import RootNavBar from '/components/navBars/RootNavBar';

const RootLayout: NextPage<Props> = ({ children }) => {
  return (
    <RootDiv>
      <RootNavBar />
      {children}
    </RootDiv>
  );
};

interface Props {
  children: ReactNode;
}

const RootDiv = styled.div`
  background-color: aquamarine;
  flex-direction: row;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export default RootLayout;
