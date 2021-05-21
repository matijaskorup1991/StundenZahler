import {
  GET_ALL_DAYS,
  CREATE_DAY,
  UPDATE_DAY,
  DELETE_DAY,
  LOGOUT,
  CLEAR_DAYS,
  MOVE_DAYS_TO_MONTH,
  CLEAR_ALL,
} from '../actionTypes';

const initialState = {
  days: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DAYS:
      return {
        ...state,
        days: action.payload.days,
      };
    case CREATE_DAY:
      return {
        ...state,
        days: [...state.days, action.payload.day],
      };
    case UPDATE_DAY:
      return {
        ...state,
        days: state.days.map((el) =>
          el.id == action.payload.id ? action.payload : el
        ),
      };
    case MOVE_DAYS_TO_MONTH:
      return {
        ...state,
        days: [],
      };
    case DELETE_DAY:
      return {
        ...state,
        days: state.days.filter((el) => el.id !== action.payload),
      };
    case CLEAR_DAYS:
      return {
        ...state,
        days: [],
      };
    case LOGOUT:
    case CLEAR_ALL:
      return {
        ...state,
        days: [],
      };
    default:
      return state;
  }
};

export default reducer;
