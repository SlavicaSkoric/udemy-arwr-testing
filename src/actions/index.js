//will house our action creator

import { SAVE_COMMENT } from './types';
//named import

//action creator:
export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
}
