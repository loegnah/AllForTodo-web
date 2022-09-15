import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      bg: string;
      bgSub?: string;
      line: string;
      lineSub?: string;
      font: string;
      fontLight?: string;
    };
  }
}
