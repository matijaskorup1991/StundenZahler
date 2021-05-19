import {
  GET_ALL_DAYS,
  CREATE_DAY,
  UPDATE_DAY,
  DELETE_DAY,
  REMOVE_ALERT,
  LOGOUT,
  CLEAR_DAYS,
  MOVE_DAYS_TO_MONTH,
  DELETE_MESSAGE,
  CLEAR_MESSAGE,
} from '../actionTypes';

const initialState = {
  days: [],
  message: null,
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
    case DELETE_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    case CLEAR_MESSAGE:
    case REMOVE_ALERT:
      return {
        ...state,
        message: null,
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
      return {
        ...state,
        days: [],
      };
    default:
      return state;
  }
};

export default reducer;
