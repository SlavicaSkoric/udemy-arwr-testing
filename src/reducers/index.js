//combineReducers call, combines all reducers into a single object

import { combineReducers } from 'redux';
import commentsReducer from './commentsReducer';
import authReducer from './authReducer';

export default combineReducers({
  comments: commentsReducer,
  auth: authReducer,
});
