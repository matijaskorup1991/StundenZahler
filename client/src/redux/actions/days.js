import axios from '../../utils/axios';
import {
  GET_ALL_DAYS,
  CREATE_DAY,
  UPDATE_DAY,
  DELETE_DAY,
} from '../actionTypes';

export const getAllDays = () => async (dispatch) => {
  try {
    let { data } = await axios.get('/api/month/day/');
    dispatch({
      type: GET_ALL_DAYS,
      payload: data,
    });
  } catch (error) {
    console.log(error.response);
    dispatch({ type: FAILURE });
  }
};
