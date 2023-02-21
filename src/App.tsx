import { ThemeProvider } from '@mui/material';
import { AppStyled, MainHeaderStyled } from './app.styled';
import { OrbitalObjectsList } from './components/newOrbitalObjectsList/OrbitalObjectsList';
import { PageContainer } from './components/UI/pageContainer/PageContainer';
import { theme } from './theme/theme';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppStyled>
        <PageContainer>
          <MainHeaderStyled variant='h5' component='h1'>
            Near earth Asteroids information per day
          </MainHeaderStyled>
          <OrbitalObjectsList />
        </PageContainer>
      </AppStyled>
    </ThemeProvider>
  );
};
