import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
import { AsteroidObjectResponse } from '../api/modelsTypes';
import { MappedAsteroidObject } from '../components/newOrbitalObjectsList/types';

export const mapAsteroidsDataToRender = (
  asteroids: AsteroidObjectResponse[],
  date: dayjs.Dayjs,
): MappedAsteroidObject => {
  const initialObject: MappedAsteroidObject = {
    id: '',
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
      id: uuidv4(),
      date: date.format('YYYY-MM-DD'),
      maxDiameterKilometers,
      numberOfPotentiallyHazardousNEOs,
      closestNEOKm,
      fastestNEOKph,
    };
  };

  return asteroids.reduce(reduceFn, initialObject);
};

export const findTwoMaxValues = (
  arr: MappedAsteroidObject[],
  // ): { maxElement: MappedAsteroidObject; prevMaxElement: MappedAsteroidObject } => {
): string[] => {
  let maxElement = { numberOfPotentiallyHazardousNEOs: 0 } as MappedAsteroidObject;
  let prevMaxElement = { numberOfPotentiallyHazardousNEOs: 0 } as MappedAsteroidObject;

  const arrCopy = [...arr];

  arrCopy.reverse().forEach((element) => {
    if (element.numberOfPotentiallyHazardousNEOs >= maxElement.numberOfPotentiallyHazardousNEOs) {
      prevMaxElement = maxElement;
      maxElement = element;
    } else if (
      element.numberOfPotentiallyHazardousNEOs >= prevMaxElement.numberOfPotentiallyHazardousNEOs
    ) {
      prevMaxElement = element;
    }
  });

  // return { maxElement, prevMaxElement };
  return [maxElement.id, prevMaxElement.id];
};
