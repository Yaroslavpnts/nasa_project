import React, { useEffect, useState, useRef } from 'react';
import dayjs from 'dayjs';
import Box from '@mui/material/Box';
import { api } from '../../api/apiMethods';
import { OrbitalObjectsListStyled } from './orbitalObjectsList.styled';
import { INTERVAL_TIME } from '../../utils/constants';
import { MappedAsteroidObject } from './types';
import { findTwoMaxValues, mapAsteroidsDataToRender } from '../../utils/helperFunctions';
import { NewOrbitalObjectItem } from './newOrbitalObjectItem.tsx/NewOrbitalObjectItem';

const currentDayOfMonth = dayjs().date();
const minPeriod = dayjs().date(1);
const maxPeriod = dayjs().date(currentDayOfMonth);

export const OrbitalObjectsList: React.FC = () => {
  const [asteroids, setAsteroids] = useState<MappedAsteroidObject[]>([]);
  const [prevHighestElement, setPrevHighestElement] = useState<MappedAsteroidObject | null>(null);
  const [highestElement, setHighestElement] = useState<MappedAsteroidObject | null>(null);

  const dayRef = useRef(minPeriod);

  useEffect(() => {
    const updateData = async () => {
      const day = dayRef.current;
      try {
        const {
          data: { near_earth_objects: nearEarthObjects },
        } = await api.getNearEarthAsteroids(day);

        const mappedAsteroidsData = mapAsteroidsDataToRender(
          [...nearEarthObjects[day.format('YYYY-MM-DD')]],
          day,
        );
        setAsteroids((prev) => [mappedAsteroidsData, ...prev].slice(0, 6));

        if (dayRef.current.get('date') < maxPeriod.get('date')) {
          dayRef.current = dayRef.current.add(1, 'day');
        } else {
          dayRef.current = dayRef.current.date(1);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const intervalId = setInterval(updateData, INTERVAL_TIME);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const { maxElement, prevMaxElement } = findTwoMaxValues(asteroids);

    setPrevHighestElement(prevMaxElement);
    setHighestElement(maxElement);
  }, [asteroids]);

  const isMostDangerous = (elem: MappedAsteroidObject) => {
    return (
      (Object.is(elem, highestElement) && elem.numberOfPotentiallyHazardousNEOs !== 0) ||
      (Object.is(elem, prevHighestElement) && elem.numberOfPotentiallyHazardousNEOs !== 0)
    );
  };

  return (
    <Box>
      <OrbitalObjectsListStyled container>
        {asteroids.map((asteroid) => (
          <NewOrbitalObjectItem
            key={asteroid.id}
            asteroid={asteroid}
            mostDangerous={isMostDangerous(asteroid)}
          />
        ))}
      </OrbitalObjectsListStyled>
    </Box>
  );
};
