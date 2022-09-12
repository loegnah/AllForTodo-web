import styled from '@emotion/styled';
import type { NextPage } from 'next';
import type { ReactNode } from 'react';
import RootNavBar from '/components/navBars/RootNavBar';
import { getColor } from '../libs/cssLibs';

const RootLayout: NextPage<Props> = ({ children, minimalMode }) => {
  return (
    <RootDiv>
      {!minimalMode && <RootNavBar />}
      {children}
    </RootDiv>
  );
};

interface Props {
  children: ReactNode;
  minimalMode: boolean;
}

const RootDiv = styled.div`
  background-color: ${getColor('bg')};
  flex-direction: row;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export default RootLayout;
