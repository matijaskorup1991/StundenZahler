import { SET_ALERT, REMOVE_ALERT } from '../actionTypes';

const initialState = {
  message: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        message: action.payload,
      };
    case REMOVE_ALERT:
      return {
        ...state,
        message: null,
      };
    default:
      return state;
  }
};

export default reducer;
