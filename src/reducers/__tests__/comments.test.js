import commentsReducer from 'reducers/commentsReducer';
import { SAVE_COMMENT } from 'actions/types';

it('handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'New Comment',
  };

  const newState = commentsReducer([], action);

  //toEqual matcher
  expect(newState).toEqual(['New Comment']);
});
//don't forget to expect a false value as well, to test if our test would fail as we expect them to
//and then of course return the expectation to its real value after confirming this

it('handles action with unknown type', () => {
  const newState = commentsReducer([], {});

  expect(newState).toEqual([]);
});
