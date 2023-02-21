import { Box, styled } from '@mui/material';

export const AppStyled = styled(Box)`
  width: 100%;
  height: 100vh;
  background-image: url('../public/bgSpace.jpeg');
  /* background-color: black; */
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  h1 {
    color: ${(props) => props.theme.palette.mainTextColor.main};
    text-align: center;
  }
`;
