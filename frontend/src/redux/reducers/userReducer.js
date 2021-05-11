import { REGISTER, FAILURE, LOGIN, LOGOUT } from '../actionTypes';

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

    case FAILURE:
      return {
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
