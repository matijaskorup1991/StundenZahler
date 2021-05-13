import {
  GET_ALL_MONTHS,
  GET_MONTH,
  DELETE_MONTH,
  FAILURE,
  CREATE_MONTH,
  LOGOUT,
} from '../actionTypes';

const initialState = {
  months: [],
  month: null,
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MONTHS:
      return {
        ...state,
        months: action.payload.months,
        count: action.payload.count,
      };
    case CREATE_MONTH:
      return {
        ...state,
        months: [...state.months, action.payload.months],
        count: action.payload.count,
      };
    case GET_MONTH:
      return {
        ...state,
        month: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        months: [],
        count: 0,
      };
    case FAILURE:
      return {
        ...state,
        months: [],
      };
    default:
      return state;
  }
};

export default reducer;
