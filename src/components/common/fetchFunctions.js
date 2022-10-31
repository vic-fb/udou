import { userId } from '../../config';

export const getTrackables = (setTrackables) => {
  fetch(`/trackables/${userId}`)
    .then(
      (res) => res.json(),
    )
    .then(
      (json) => setTrackables(json),
    )
    .catch((error) => {
      console.log(`Error: ${error.message}`);
    });
};

export const getEntries = (setDayEntries, date) => {
  fetch(`/entries/${userId}/${date.toISOString().substring(0, 10)}`)
    .then(
      (res) => res.json(),
    )
    .then(
      (json) => setDayEntries(json),
    )
    .catch((error) => {
      console.log(`Error: ${error.message}`);
    });
};
