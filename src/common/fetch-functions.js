import { message } from 'antd';
import { userId } from 'config';

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const get = (route) => fetch(apiUrl + route)
  .then((response) => response.json())
  .catch(() => message.error('An error happened'));

const post = (route, payload) => fetch(apiUrl + route, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(payload),
})
  .then((response) => {
    if (!response.ok) throw new Error('Network response was not OK');
    return response.json();
  })
  .catch(() => message.error('An error happened'));

export const getTrackables = () => get(`/trackables/${userId}`);

export const getEntries = (date) => get(`/entries/${userId}/${date.toISOString().substring(0, 10)}`);

export const getEntriesByDateRange = (trackableId, startDate, endDate) => get(`/entries/${trackableId}/${startDate}/${endDate}`);

export const getQuantitativeTrackables = () => get(`/trackables/${userId}/quantitative`);

export const getCurrentUser = () => get(`/users/${userId}`);

export const addTrackable = (newTrackable) => post('/trackables', newTrackable);
