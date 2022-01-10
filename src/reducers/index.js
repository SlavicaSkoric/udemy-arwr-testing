//combineReducers call, combines all reducers into a single object

import { combineReducers } from 'redux';
import commentsReducer from './commentsReducer';

export default combineReducers({
  comments: commentsReducer,
});
