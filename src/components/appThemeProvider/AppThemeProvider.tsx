import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: 'blue',
    secondary: 'purple',
  },
  breakpoints: { sm: '576px', md: '768px', lg: '992px', xl: '1200px', xxl: '1400px' },
};

interface ThemeProdiverProps {
  children: React.ReactNode;
}

export const AppThemeProvider: React.FC<ThemeProdiverProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
