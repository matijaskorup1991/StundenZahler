import { REGISTER, FAILURE, LOGIN, LOGOUT } from '../actionTypes';

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
