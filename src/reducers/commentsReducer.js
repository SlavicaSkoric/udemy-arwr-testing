import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';

//reducer
export default function commentsReducer(state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload, {}];
    case FETCH_COMMENTS:
      //debugger;
      //when we hit debugger; statement, we can log our action in the browser console
      const comments = action.payload.data.map((comment) => comment.name);
      return [...state, ...comments];
    default:
      return state;
  }
}

//first argument to a reducer is a starting state object, it is an array, an empty array here

//debugger statement
