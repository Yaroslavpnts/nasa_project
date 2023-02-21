import React from 'react';
import { PageContainerStyled } from './PageContainer.styled';

interface PageContainerProps {
  children: React.ReactNode;
}

export const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return <PageContainerStyled>{children}</PageContainerStyled>;
};
