import React from 'react';
import { CustomButtonStyled } from './CustomButton.styled';

export enum ButtonColors {
  YELLOW = '#EBEB0C',
  GRAY = '#C6C6BE',
}

interface ICustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color: ButtonColors;
}

export const CustomButton: React.FC<ICustomButtonProps> = ({ children, color, ...props }) => {
  return (
    <CustomButtonStyled {...props} color={color} onClick={console.log}>
      {children}
    </CustomButtonStyled>
  );
};
