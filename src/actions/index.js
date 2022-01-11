//will house our action creators

import axios from 'axios';
import { SAVE_COMMENT, FETCH_COMMENTS } from './types';
//named import

//action creators:
export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
}

export function fetchComments() {
  const response = axios.get('http://jsonplaceholder.typicode.com/comments');

  //return an action:
  return {
    type: FETCH_COMMENTS,
    payload: response,
  };
}
