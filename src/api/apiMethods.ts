import dayjs from 'dayjs';
import { instance } from './axios';
import { API_KEY } from '../config';
import { INearEarthAsteroidsResponse } from './modelsTypes';

export const api = {
  getNearEarthAsteroids(day: dayjs.Dayjs) {
    const formattedDay = day.format('YYYY-MM-DD');
    const apiKey = API_KEY;

    return instance.get<INearEarthAsteroidsResponse>(
      `?start_date=${formattedDay}&end_date=${formattedDay}&api_key=${apiKey}`,
    );
  },
};
