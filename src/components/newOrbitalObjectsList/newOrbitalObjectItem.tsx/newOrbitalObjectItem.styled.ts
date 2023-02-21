import { Box, Grid, styled } from '@mui/material';

interface OrbitalObjectProps {
  mostdangerous?: string;
}

export const NewOrbitalObjectItemStyled = styled(Grid)<OrbitalObjectProps>`
  background-color: ${(props) =>
    props.mostdangerous ? props.theme.palette.errorColor.main : '#DBD7D5'};
  color: ${(props) => (props.mostdangerous ? '#DBD7D5' : '#282321')};
  border-radius: 15px;
  padding: 10px 10px;
  width: 30%;

  h3 {
    font-size: 28px;
    text-align: center;
    margin-bottom: 15px;

    @media screen and (max-width: 715px) {
      font-size: 24px;
    }
  }

  @media screen and (max-width: 1270px) {
    width: 35%;
  }

  @media screen and (max-width: 984px) {
    width: 40%;
  }

  @media screen and (max-width: 868px) {
    width: 60%;
  }

  @media screen and (max-width: 715px) {
    width: 70%;
  }

  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;

export const OrbitalObjectItemDataStyled = styled(Box)`
  display: flex;
  gap: 15px;

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    li {
      display: flex;
      justify-content: space-between;
    }

    span:first-of-type {
      width: 70%;

      @media screen and (max-width: 1000px) {
        width: 55%;
      }
    }

    span:last-of-type {
      align-self: self-end;
    }

    span {
      font-size: 18px;
      line-height: 20px;

      @media screen and (max-width: 715px) {
        font-size: 16px;
        line-height: 18px;
      }
    }
  }
`;
