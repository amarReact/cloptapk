// apiService.js
import axios from 'axios';
import { BASE_URL } from './constants';


export const fetchData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/data`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
