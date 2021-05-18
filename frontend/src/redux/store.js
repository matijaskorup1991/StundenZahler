import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import userReducer from './reducers/userReducer';
import daysReducer from './reducers/days';
import monthsReducer from './reducers/months';
import alertReducer from './reducers/alert';

const userDataFromStorage = sessionStorage.getItem('user')
  ? JSON.parse(sessionStorage.getItem('user'))
  : null;

const initialState = {
  userReducer: {
    user: userDataFromStorage,
  },
};
const middleware = [thunk];

const reducer = combineReducers({
  userReducer,
  daysReducer,
  monthsReducer,
  alertReducer,
});

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
