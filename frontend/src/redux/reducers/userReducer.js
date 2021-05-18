import {
  REGISTER,
  USER_FAILURE,
  LOGIN,
  LOGOUT,
  REMOVE_ALERT,
} from '../actionTypes';

const initialState = {
  user: null,
  error: null,
  message: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
    case LOGIN:
      return {
        ...state,
        user: action.payload,
        message: null,
      };

    case LOGOUT:
      return {
        ...state,
        user: null,
        message: action.payload.message,
      };

    case USER_FAILURE:
      return {
        user: null,
        error: action.payload,
      };
    case REMOVE_ALERT:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default reducer;
