import axios from 'axios';
import {
  REGISTER,
  LOGIN,
  LOGOUT,
  USER_FAILURE,
  DELETE_PROFILE,
  REMOVE_ALERT,
} from '../actionTypes';

export const register =
  (username, email, password, history) => async (dispatch) => {
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
      sessionStorage.setItem('user', JSON.stringify(data));
      history.push('/home');
    } catch (error) {
      dispatch({
        type: USER_FAILURE,
        payload: error.response ? error.response.data.message : error,
      });
      setTimeout(() => dispatch({ type: REMOVE_ALERT }), 3000);
    }
  };

export const login = (email, password, history) => async (dispatch) => {
  try {
    let { data } = await axios.post('/api/user/login', { email, password });

    dispatch({
      type: LOGIN,
      payload: data,
    });
    sessionStorage.setItem('user', JSON.stringify(data));
    history.push('/home');
  } catch (error) {
    dispatch({
      type: USER_FAILURE,
      payload: error.response ? error.response.data.message : error,
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 3000);
  }
};

export const logout = () => async (dispatch) => {
  try {
    sessionStorage.clear();

    let { data } = await axios.get('/api/user/logout');

    dispatch({ type: LOGOUT, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: USER_FAILURE });
  }
};

export const deleteProfile = (id) => async (dispatch) => {
  try {
    let data = await axios.delete(`/deleteProfile/${id}`);
    dispatch({ type: DELETE_PROFILE, payload: data });
    sessionStorage.removeItem('user');
  } catch (error) {
    console.log(error.response);
    dispatch({ type: USER_FAILURE });
  }
};
