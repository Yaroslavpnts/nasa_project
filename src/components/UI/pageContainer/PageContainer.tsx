import Container from '@mui/material/Container';
import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
}

export const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return <Container>{children}</Container>;
};
