import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import userReducer from './reducers/userReducer';
import daysReducer from './reducers/days';
import monthsReducer from './reducers/months';

const initialState = {};
const middleware = [thunk];

const reducer = combineReducers({
  userReducer,
  daysReducer,
  monthsReducer,
});

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
