import {
  GET_ALL_MONTHS,
  GET_MONTH,
  DELETE_MONTH,
  FAILURE,
} from '../actionTypes';

const initialState = {
  months: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MONTHS:
      return {
        ...state,
        months: action.payload,
      };
    case FAILURE:
      return {
        ...state,
        months: null,
      };
    default:
      return state;
  }
};

export default reducer;
