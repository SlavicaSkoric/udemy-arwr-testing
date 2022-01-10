import { SAVE_COMMENT } from 'actions/types';

//reducer
export default function commentsReducer(state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
}

//first argument to a reducer is a starting state object, it is an array, an empty array here
