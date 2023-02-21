import styled from 'styled-components';

export const CustomButtonStyled = styled.button`
  background-color: ${props => props.color};
  font-size: 16px;
  line-height: 26px;
  color: rgba(0, 0, 0, 0.87);
  width: 100px;
  height: 34px;
  border: none;
  border-radius: 80px;
  cursor: pointer;
`;
