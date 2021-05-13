import axios from 'axios';
import {
  GET_ALL_MONTHS,
  GET_MONTH,
  DELETE_MONTH,
  FAILURE,
} from '../actionTypes';

export const getAllMonths = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/month/');
    dispatch({
      type: GET_ALL_MONTHS,
      payload: data,
    });
  } catch (error) {
    console.log(error.response);
    dispatch({ type: FAILURE });
  }
};

export const getMonth = (id) => async (dispatch) => {
  try {
    let { data } = axios.get(`/api/month/${id}`);
    dispatch({
      type: GET_MONTH,
      payload: data,
    });
  } catch (error) {
    console.log(error.response);
    dispatch({ type: FAILURE });
  }
};

export const saveToMonth = () => (dispatch) => {
  try {
  } catch (error) {}
};
