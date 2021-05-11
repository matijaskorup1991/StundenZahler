import {
  GET_ALL_DAYS,
  CREATE_DAY,
  UPDATE_DAY,
  DELETE_DAY,
} from '../actionTypes';

const initialState = {
  days: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DAYS:
      return {
        ...state,
        days: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
