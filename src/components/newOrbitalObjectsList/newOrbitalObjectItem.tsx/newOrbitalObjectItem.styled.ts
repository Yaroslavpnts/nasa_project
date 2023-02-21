import { Grid, styled } from '@mui/material';

export const NewOrbitalObjectItemStyled = styled(Grid)<{
  mostdangerous?: string;
}>`
  background-color: ${(props) => (props.mostdangerous ? 'red' : 'grey')};
`;
