import styled from '@emotion/styled';
import type { NextPage } from 'next';
import type { ReactNode } from 'react';
import RootNav from '/components/navs/RootNav';
import { getColor } from '/libs/cssLib';

const RootLayout: NextPage<Props> = ({ children, minimalMode }) => {
  return (
    <RootDiv>
      {!minimalMode && <RootNav />}
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
