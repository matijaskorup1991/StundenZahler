import axios from 'axios';
import { REGISTER, FAILURE } from '../actionTypes';

export const register = (name, email, password) => async (dispatch) => {
  try {
    let data = await axios.post('/api/user/', { name, email, password });

    dispatch({
      type: REGISTER,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FAILURE,
    });
  }
};
