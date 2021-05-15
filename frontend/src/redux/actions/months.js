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

export const getAllMonths = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/month/');
    console.log(data.months);

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
    let {
      data: { data },
    } = await axios.get(`/api/month/${id}`);
    console.log(data);
    dispatch({
      type: GET_MONTH,
      payload: data,
    });
  } catch (error) {
    console.log(error.response);
    dispatch({ type: FAILURE });
  }
};

export const saveToMonth = (data) => async (dispatch) => {
  let user_id = data[0].user_id;
  try {
    let data1 = await axios.post('/api/month/', { data });
    let data2 = await axios.delete('/api/day/move', { user_id });
    dispatch({ type: CREATE_MONTH, payload: data1.data.data });
    dispatch({
      type: MOVE_DAYS_TO_MONTH,
      payload: data2,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteMonth = (id) => async (dispatch) => {
  try {
    let { data } = await axios.delete(`/api/month/${id}`);
    console.log(data);
    dispatch({
      type: DELETE_MONTH,
      payload: data.id,
    });
  } catch (error) {
    console.log(error);
  }
};
