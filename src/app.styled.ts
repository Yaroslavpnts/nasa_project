import { Box, styled, Typography } from '@mui/material';

export const AppStyled = styled(Box)`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  /* background-image: url('../public/bgSpace.jpeg'); */
  background-image: url('../public/test.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: repeat;
  padding: 15px 0;

  h1 {
  }
`;

export const MainHeaderStyled = styled(Typography)<{ component: keyof JSX.IntrinsicElements }>`
  color: ${(props) => props.theme.palette.mainTextColor.main};
  text-align: center;
  font-size: 40px;
  line-height: 44px;
  margin-bottom: 40px;
`;
