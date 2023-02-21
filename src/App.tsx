import { Typography } from '@mui/material';
import { AppStyled } from './app.styled';
import { OrbitalObjectsList } from './components/newOrbitalObjectsList/OrbitalObjectsList';
import { PageContainer } from './components/UI/pageContainer/PageContainer';

export const App: React.FC = () => {
  return (
    <AppStyled>
      <PageContainer>
        <Typography variant='h5' component='h1'>
          Near earth Asteroids information per day
        </Typography>
        <OrbitalObjectsList />
      </PageContainer>
    </AppStyled>
  );
};
