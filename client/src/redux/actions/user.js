import axios from '../../utils/axios';
import { REGISTER, LOGIN, FAILURE } from '../actionTypes';

export const register = (username, email, password) => async (dispatch) => {
  try {
    let { data } = await axios.post('/api/user/register', {
      username,
      email,
      password,
    });
    console.log(data);
    dispatch({
      type: REGISTER,
      payload: data,
    });
  } catch (error) {
    console.log(error.response.data.message);
    dispatch({
      type: FAILURE,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    let { data } = await axios.post('/api/user/login', { email, password });
    dispatch({
      type: LOGIN,
      payload: data,
    });
  } catch (error) {
    console.log(error.response);
    dispatch({ type: FAILURE });
  }
};
