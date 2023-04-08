import { userId } from './config';
import { get, post } from './http';

export const getTrackables = () => get(`/trackables/${userId}`);

export const getEntries = (date) => get(`/entries/${userId}/${date.toISOString().substring(0, 10)}`);

export const getEntriesByDateRange = (trackableId, startDate, endDate) => get(`/entries/${trackableId}/${startDate}/${endDate}`);

export const getQuantitativeTrackables = () => get(`/trackables/${userId}/quantitative`);

export const getCurrentUser = () => get(`/users/${userId}`);

export const addTrackable = (newTrackable) => post('/trackables', newTrackable);
