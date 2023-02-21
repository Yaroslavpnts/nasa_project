import { Typography } from '@mui/material';
import React from 'react';
import { MappedAsteroidObject } from '../types';
import {
  NewOrbitalObjectItemStyled,
  OrbitalObjectItemDataStyled,
} from './newOrbitalObjectItem.styled';

interface NewOrbitalObjectItemProps {
  asteroid: MappedAsteroidObject;
  mostDangerous: boolean;
}

export const NewOrbitalObjectItem: React.FC<NewOrbitalObjectItemProps> = ({
  asteroid,
  mostDangerous,
}) => {
  return (
    <NewOrbitalObjectItemStyled mostdangerous={mostDangerous ? 'dangerous' : undefined} item>
      <Typography component='h3'>{asteroid.date}</Typography>
      <OrbitalObjectItemDataStyled sx={{ display: 'flex' }}>
        <ul>
          <li>
            <Typography component='span'>Max diameter in km:</Typography>
            <Typography component='span'>{asteroid.maxDiameterKilometers.toFixed(4)}</Typography>
          </li>
          <li>
            <Typography component='span'>Potentially hazardous NEOs:</Typography>
            <Typography component='span'>{asteroid.numberOfPotentiallyHazardousNEOs}</Typography>
          </li>
          <li>
            <Typography component='span'>Closest NEO in km:</Typography>
            <Typography component='span'>{asteroid.closestNEOKm.toFixed(4)}</Typography>
          </li>
          <li>
            <Typography component='span'>Faster NEO in kph:</Typography>
            <Typography component='span'>{asteroid.fastestNEOKph.toFixed(4)}</Typography>
          </li>
        </ul>
        {/* <ul>
          <li>
            <Typography component='span'>{asteroid.maxDiameterKilometers}</Typography>
          </li>
          <li>
            <Typography component='span'>{asteroid.numberOfPotentiallyHazardousNEOs}</Typography>
          </li>
          <li>
            <Typography component='span'>{asteroid.closestNEOKm}</Typography>
          </li>
          <li>
            <Typography component='span'>{asteroid.fastestNEOKph}</Typography>
          </li>
        </ul> */}
      </OrbitalObjectItemDataStyled>
    </NewOrbitalObjectItemStyled>
  );
};
