import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { reset, themes } from 'react95';

const ResetStyles = createGlobalStyle`
  ${reset}
`;

export default ({ children }) => (
  <div className="App">
    <ResetStyles />
    <ThemeProvider theme={themes.default}>
      { children }
    </ThemeProvider>
  </div>
);
