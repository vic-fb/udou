import { message } from 'antd';
import { apiUrl } from './config';

export const get = (route) => fetch(apiUrl + route)
  .then((response) => response.json())
  .catch(() => message.error('An error happened'));

export const post = (route, payload) => new Promise((resolve, reject) => {
  fetch(apiUrl + route, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }
      return response.json();
    })
    .then(resolve)
    .catch(() => {
      reject();
      return message.error('An error happened');
    });
});
