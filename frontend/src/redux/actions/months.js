import axios from 'axios';
import store from '../store';
import {
  GET_ALL_MONTHS,
  GET_MONTH,
  DELETE_MONTH,
  FAILURE,
  CREATE_MONTH,
  MOVE_DAYS_TO_MONTH,
} from '../actionTypes';

const { daysReducer } = store.getState();

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

export const saveToMonth = (days) => async (dispatch) => {
  try {
    let { data } = await axios.post('/api/month/', days);
    dispatch({ type: CREATE_MONTH, payload: data });
  } catch (error) {
    console.log(error);
  }
};
