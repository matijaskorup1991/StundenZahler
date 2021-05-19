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
      };

    default:
      return state;
  }
};

export default reducer;
