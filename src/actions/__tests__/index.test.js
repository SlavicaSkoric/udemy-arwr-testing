import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

//group each set of particular action creator tests together with their own describe statement

//we are describing saveComment action creator:
describe('saveComment', () => {
  it('has the correct type', () => {
    const action = saveComment();
    //calling an action creator directly and saving the result into a variable

    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it('has the correct payload', () => {
    const action = saveComment('New Comment');

    expect(action.payload).toEqual('New Comment');
  });
});

//if we were to describe fetchComment action creator (simple c/p of the above describe & it statements):
/* describe('fetchComment', () => {
  it('has the correct type', () => {});

  it('has the correct payload', () => {});
}); */

//make the tests break to assure ourselves that everything is working the way it's supposed to (!!!)
