import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getAllPlayers = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/players.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const addNewPlayer = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/players.json`, obj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${dbUrl}/players/${firebaseKey}.json`, { firebaseKey })
        .then(() => {
          getAllPlayers().then(resolve);
        });
    })
    .catch(reject);
});

const updatePlayer = (playerObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbUrl}/players/${playerObj.firebaseKey}.json`, playerObj)
    .then(() => getAllPlayers().then(resolve))
    .catch(reject);
});

const deletePlayer = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbUrl}/players/${firebaseKey}.json`)
    .then(() => getAllPlayers().then(resolve))
    .catch(reject);
});

export {
  getAllPlayers, addNewPlayer, updatePlayer, deletePlayer,
};
