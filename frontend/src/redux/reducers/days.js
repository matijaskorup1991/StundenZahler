import {
  GET_ALL_DAYS,
  CREATE_DAY,
  UPDATE_DAY,
  DELETE_DAY,
  LOGOUT,
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
