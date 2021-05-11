import axios from 'axios';
import {
  REGISTER,
  LOGIN,
  LOGOUT,
  FAILURE,
  DELETE_PROFILE,
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
      console.log(error.response.data.message);
      dispatch({
        type: FAILURE,
      });
    }
  };

export const login = (email, password, history) => async (dispatch) => {
  try {
    let { data } = await axios.post('/api/user/login', { email, password });

    // var headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    // headers.append('Accept', 'application/json');

    // let data = await fetch('http://localhost:5000/api/user/login', {
    //   method: 'POST',
    //   // mode: 'same-origin',
    //   redirect: 'follow',
    //   credentials: 'include', // Don't forget to specify this if you need cookies
    //   headers: headers,
    //   body: JSON.stringify({
    //     email,
    //     password,
    //   }),
    // });

    dispatch({
      type: LOGIN,
      payload: data,
    });
    sessionStorage.setItem('user', JSON.stringify(data));
    history.push('/home');
  } catch (error) {
    console.log(error);
    console.log(error.response);
    dispatch({ type: FAILURE });
  }
};

export const logout = () => async (dispatch) => {
  try {
    sessionStorage.clear();

    let { data } = await axios.get('/api/user/logout');

    dispatch({ type: LOGOUT, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: FAILURE });
  }
};

export const deleteProfile = (id) => async (dispatch) => {
  try {
    let data = await axios.delete(`/deleteProfile/${id}`);
    dispatch({ type: DELETE_PROFILE, payload: data });
    sessionStorage.removeItem('user');
  } catch (error) {
    console.log(error.response);
    dispatch({ type: FAILURE });
  }
};
