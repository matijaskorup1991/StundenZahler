import axios from 'axios';
import {
  GET_ALL_DAYS,
  CREATE_DAY,
  UPDATE_DAY,
  DELETE_DAY,
  CLEAR_DAYS,
} from '../actionTypes';
import { responseMessage } from './alert';

export const getAllDays = () => async (dispatch) => {
  try {
    let { data } = await axios.get('/api/day/');

    dispatch({
      type: GET_ALL_DAYS,
      payload: data,
    });
  } catch (error) {
    let msg = error.response ? error.response.data.message : error.message;
    responseMessage(msg, dispatch);
  }
};

export const createDay = (date, hours) => async (dispatch) => {
  try {
    let { data } = await axios.post('/api/day/', { date, hours });
    dispatch({ type: CREATE_DAY, payload: data });
  } catch (error) {
    let msg = error.response ? error.response.data.message : error.message;
    responseMessage(msg, dispatch);
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
    responseMessage(msg, dispatch);
  }
};

export const deleteDay = (id) => async (dispatch) => {
  try {
    let { data } = await axios.delete(`/api/day/${id}`);
    dispatch({ type: DELETE_DAY, payload: id });
    responseMessage(data.message, dispatch);
  } catch (error) {
    let msg = error.response ? error.response.data.message : error.message;
    responseMessage(msg, dispatch);
  }
};

export const clearDays = () => (dispatch) => {
  dispatch({ type: CLEAR_DAYS });
};
