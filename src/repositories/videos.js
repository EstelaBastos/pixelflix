import requestManager from './requestManager.js';

const URL = `${process.env.REACT_APP_API_URL}/videos`;

const createVideo = (body) => requestManager.sendRequest(URL, {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(body),
});

export default {
  createVideo,
}