import tw, { styled, css } from 'twin.macro';
import type { NextPage } from 'next';
import type { ReactNode } from 'react';
import RootNav from '/components/navs/RootNav';

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

const RootDiv = styled.div(({ theme }) => [
  tw`flex-row w-full h-full absolute`,
  css`
    background-color: ${theme.color.bg};
  `,
]);
export default RootLayout;
