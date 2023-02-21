import dayjs from 'dayjs';
import { AsteroidObjectResponse } from '../api/modelsTypes';
import { MappedAsteroidObject } from '../components/newOrbitalObjectsList/types';

export const mapAsteroidsDataToRender = (
  asteroids: AsteroidObjectResponse[],
  date: dayjs.Dayjs,
): MappedAsteroidObject => {
  const initialObject: MappedAsteroidObject = {
    id: 0,
    date: '',
    maxDiameterKilometers: 0,
    numberOfPotentiallyHazardousNEOs: 0,
    closestNEOKm: 0,
    fastestNEOKph: 0,
  };

  const reduceFn = (acc: MappedAsteroidObject, current: AsteroidObjectResponse) => {
    const maxDiameterKilometers =
      current.estimated_diameter.kilometers.estimated_diameter_max > acc.maxDiameterKilometers
        ? current.estimated_diameter.kilometers.estimated_diameter_max
        : acc.maxDiameterKilometers;

    const numberOfPotentiallyHazardousNEOs = current.is_potentially_hazardous_asteroid
      ? acc.numberOfPotentiallyHazardousNEOs + 1
      : acc.numberOfPotentiallyHazardousNEOs;

    let closestNEOKm;

    if (acc.closestNEOKm === 0) {
      closestNEOKm = +current.close_approach_data[0].miss_distance.kilometers;
    } else {
      closestNEOKm =
        +current.close_approach_data[0].miss_distance.kilometers < acc.closestNEOKm
          ? +current.close_approach_data[0].miss_distance.kilometers
          : acc.closestNEOKm;
    }

    const fastestNEOKph =
      +current.close_approach_data[0].relative_velocity.kilometers_per_hour > acc.fastestNEOKph
        ? +current.close_approach_data[0].relative_velocity.kilometers_per_hour
        : acc.fastestNEOKph;

    return {
      id: current.id,
      date: date.format('YYYY-MM-DD'),
      maxDiameterKilometers,
      numberOfPotentiallyHazardousNEOs,
      closestNEOKm,
      fastestNEOKph,
    };
  };

  return asteroids.reduce(reduceFn, initialObject);
};

export const findTwoMaxValues = (arr: number[]): { max: number; prevMax: number } => {
  let max = 0;
  let prevMax = 0;

  arr.forEach((element) => {
    if (element > max) {
      prevMax = max;
      max = element;
    } else if (element > prevMax) {
      prevMax = element;
    }
  });

  return { max, prevMax };
};
