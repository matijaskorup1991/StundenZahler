import axios from 'axios';
import {
  REGISTER,
  LOGIN,
  LOGOUT,
  DELETE_PROFILE,
  CLEAR_ALL,
} from '../actionTypes';
import { responseMessage } from '../actions/alert';

export const register =
  (username, email, password, history) => async (dispatch) => {
    try {
      let { data } = await axios.post('/api/user/register', {
        username,
        email,
        password,
      });
      dispatch({
        type: REGISTER,
        payload: data,
      });
      sessionStorage.setItem('user', JSON.stringify(data));
      history.push('/home');
    } catch (error) {
      let msg = error.response ? error.response.data.message : error.message;
      responseMessage(msg, dispatch);
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
    let msg = error.response ? error.response.data.message : error.message;
    responseMessage(msg, dispatch);
  }
};

export const logout = () => async (dispatch) => {
  try {
    sessionStorage.clear();

    let { data } = await axios.get('/api/user/logout');

    dispatch({ type: LOGOUT, payload: data });
  } catch (error) {
    let msg = error.response ? error.response.data.message : error.message;
    responseMessage(msg, dispatch);
  }
};

export const deleteProfile = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/user/deleteProfile/${id}`);
    dispatch({ type: DELETE_PROFILE });
    dispatch({ type: CLEAR_ALL });
    sessionStorage.clear();
  } catch (error) {
    let msg = error.response ? error.response.data.message : error.message;
    responseMessage(msg, dispatch);
  }
};
