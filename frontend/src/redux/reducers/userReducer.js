import {
  REGISTER,
  USER_FAILURE,
  LOGIN,
  LOGOUT,
  REMOVE_ALERT,
  DELETE_PROFILE,
} from '../actionTypes';

const initialState = {
  user: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
    case LOGIN:
      return {
        ...state,
        user: action.payload,
      };

    case LOGOUT:
      return {
        ...state,
        user: null,
        error: null,
      };
    case DELETE_PROFILE:
      return {
        ...state,
        user: null,
        error: null,
      };
    default:
      return state;
  }
};

export default reducer;
