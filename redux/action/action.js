// actions.js
import { fetchData } from './apiService';

export const fetchApiData = () => async (dispatch) => {
  try {
    dispatch({ type: 'FETCH_DATA_REQUEST' });

    const data = await fetchData();

    dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
  }
};
