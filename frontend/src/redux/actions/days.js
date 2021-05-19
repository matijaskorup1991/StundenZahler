import axios from 'axios';
import {
  GET_ALL_DAYS,
  CREATE_DAY,
  UPDATE_DAY,
  DELETE_DAY,
  FAILURE,
  CLEAR_DAYS,
  DELETE_MESSAGE,
  CLEAR_MESSAGE,
  DAY_FAILURE,
} from '../actionTypes';
import { errorResponse } from './alert';

export const getAllDays = () => async (dispatch) => {
  try {
    let { data } = await axios.get('/api/day/');

    dispatch({
      type: GET_ALL_DAYS,
      payload: data,
    });
  } catch (error) {
    let msg = error.response ? error.response.data.message : error.message;
    errorResponse(msg, dispatch);
  }
};

export const createDay = (date, hours) => async (dispatch) => {
  try {
    console.log(date);
    let { data } = await axios.post('/api/day/', { date, hours });
    dispatch({ type: CREATE_DAY, payload: data });
  } catch (error) {
    let msg = error.response ? error.response.data.message : error.message;
    errorResponse(msg, dispatch);
  }
};

export const updateDay = (id, date, hours) => async (dispatch) => {
  try {
    let { data } = await axios.put(`/api/day/${id}`, { date, hours });
    dispatch({
      type: UPDATE_DAY,
      payload: data.message,
    });
  } catch (error) {
    let msg = error.response ? error.response.data.message : error.message;
    errorResponse(msg, dispatch);
  }
};

export const deleteDay = (id) => async (dispatch) => {
  try {
    let { data } = await axios.delete(`/api/day/${id}`);
    console.log(data);
    dispatch({ type: DELETE_DAY, payload: id });
    dispatch({ type: DELETE_MESSAGE, payload: data.message });
    setTimeout(() => dispatch({ type: CLEAR_MESSAGE }), 3000);
  } catch (error) {
    let msg = error.response ? error.response.data.message : error.message;
    errorResponse(msg, dispatch);
  }
};

export const clearDays = () => (dispatch) => {
  dispatch({ type: CLEAR_DAYS });
};
