import axios from 'axios';
import {
  GET_ALL_DAYS,
  CREATE_DAY,
  UPDATE_DAY,
  DELETE_DAY,
  FAILURE,
} from '../actionTypes';

export const getAllDays = () => async (dispatch) => {
  try {
    let { data } = await axios.get('/api/day/');

    dispatch({
      type: GET_ALL_DAYS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    console.log(error.response);
    dispatch({ type: FAILURE });
  }
};

export const createDay = (date, hours) => async (dispatch) => {
  try {
    let { data } = await axios.post('/api/day/', { date, hours });
    console.log(JSON.stringify(data));
    dispatch({ type: CREATE_DAY, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: FAILURE });
  }
};

export const deleteDay = (id) => async (dispatch) => {
  try {
    let { data } = await axios.delete(`/api/day/${id}`);
    console.log(data);
    dispatch({ type: DELETE_DAY, payload: id });
  } catch (error) {
    console.log(error);
  }
};
