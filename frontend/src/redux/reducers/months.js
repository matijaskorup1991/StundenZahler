import {
  GET_ALL_MONTHS,
  GET_MONTH,
  DELETE_MONTH,
  FAILURE,
  CREATE_MONTH,
} from '../actionTypes';

const initialState = {
  months: null,
  month: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MONTHS:
      return {
        ...state,
        months: action.payload,
      };
    case GET_MONTH:
      return {
        ...state,
        month: action.payload,
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
