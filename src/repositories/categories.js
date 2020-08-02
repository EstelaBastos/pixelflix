import requestManager from './requestManager.js';

const URL = `${process.env.REACT_APP_API_URL}/categories`;

const getAllCategoriesWithVideos = () => requestManager.sendRequest(`${URL}?_embed=videos`);
const getAllCategories = () => requestManager.sendRequest(URL);

export default {
  getAllCategoriesWithVideos,
  getAllCategories,
};
