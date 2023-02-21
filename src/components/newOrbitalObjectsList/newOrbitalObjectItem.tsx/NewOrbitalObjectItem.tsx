import React from 'react';
import { MappedAsteroidObject } from '../types';
import { NewOrbitalObjectItemStyled } from './newOrbitalObjectItem.styled';

interface NewOrbitalObjectItemProps {
  asteroid: MappedAsteroidObject;
  mostDangerous: boolean;
}

export const NewOrbitalObjectItem: React.FC<NewOrbitalObjectItemProps> = ({
  asteroid,
  mostDangerous,
}) => {
  return (
    <NewOrbitalObjectItemStyled mostdangerous={mostDangerous ? 'dangerous' : undefined}>
      <div>{asteroid.date}</div>
      <div>{asteroid.maxDiameterKilometers}</div>
      <div>{asteroid.numberOfPotentiallyHazardousNEOs}</div>
      <div>{asteroid.closestNEOKm}</div>
      <div>{asteroid.fastestNEOKph}</div>
    </NewOrbitalObjectItemStyled>
  );
};
