import { REMOVE_ALERT, SET_ALERT } from '../actionTypes';

export const alert =
  (message, alertType, timeout = 3000) =>
  (dispatch) => {
    dispatch({
      type: SET_ALERT,
      payload: { message, alertType },
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), timeout);
  };
