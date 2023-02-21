import { Grid, styled } from '@mui/material';

interface OrbitalObjectProps {
  mostdangerous?: string;
}

export const NewOrbitalObjectItemStyled = styled(Grid)<OrbitalObjectProps>`
  background-color: ${(props) =>
    props.mostdangerous ? props.theme.palette.errorColor.main : '#DBD7D5'};
`;
