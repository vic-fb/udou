import { message } from 'antd';
import { userId } from '../config';

const request = (route) => fetch(route)
  .then((res) => res.json())
  .catch(() => message.error('An error happened'));

export const getTrackables = () => request(`/trackables/${userId}`);

export const getEntries = (date) => request(`/entries/${userId}/${date.toISOString().substring(0, 10)}`);

export const getEntriesByDateRange = (trackableId, startDate, endDate) => request(`/entries/${trackableId}/${startDate}/${endDate}`);

export const getQuantitativeTrackables = () => request(`/trackables/${userId}/quantitative`);

export const getCurrentUser = () => request(`/users/${userId}`);
