import { REMOVE_ALERT, SET_ALERT } from '../actionTypes';

export const alert =
  (message, timeout = 3000) =>
  (dispatch) => {
    dispatch({
      type: SET_ALERT,
      payload: message,
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), timeout);
  };

export const responseMessage = (err, dispatch) => {
  dispatch({
    type: SET_ALERT,
    payload: err,
  });
  setTimeout(() => dispatch({ type: REMOVE_ALERT }), 3000);
};
