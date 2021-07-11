import * as apiConfig from './APIConfig';
import * as helper from './APIHelper';
export const getFreeEBooks = async (BookName) => {
  const endpoint = apiConfig.GET_BOOKS_BY_NAME_ENDPOINT + BookName + apiConfig.KEY_HEADER;
  return await helper.getData(apiConfig.GOOGLE_BOOKS_URL, endpoint);
};

export const getAllEbooks = async bookName => {
  const endpoint =
    apiConfig.ALL_EBOOKS_ENDPOInT + bookName + apiConfig.KEY_HEADER;
  return await helper.getData(apiConfig.GOOGLE_BOOKS_URL, endpoint);
};