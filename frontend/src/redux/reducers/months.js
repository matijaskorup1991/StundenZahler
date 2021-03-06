import {
  GET_ALL_MONTHS,
  GET_MONTH,
  DELETE_MONTH,
  CREATE_MONTH,
  LOGOUT,
  CLEAR_ALL,
} from '../actionTypes';

const initialState = {
  months: [],
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
        months: [...state.months, action.payload],
        count: action.payload.count,
      };
    case GET_MONTH:
      return {
        ...state,
        month: action.payload,
      };
    case DELETE_MONTH:
      return {
        ...state,
        months: state.months.filter((el) => el.id != action.payload),
      };
    case LOGOUT:
    case CLEAR_ALL:
      return {
        ...state,
        months: [],
        count: 0,
      };
    default:
      return state;
  }
};

export default reducer;
