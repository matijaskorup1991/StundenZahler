import { REGISTER, FAILURE } from '../actionTypes';

const initialState = {
  user: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        user: action.payload,
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
