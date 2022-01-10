import React from 'react';
import { mount } from 'enzyme';
//we will use full dom rendering
import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;
//scoped variable for the entire file defined here above

beforeEach(() => {
  const initialState = {
    comments: ['Comment 1', 'Comment 2'],
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it('creates one LI per comment', () => {
  //console.log(wrapped.find('li').length);
  expect(wrapped.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
  //console.log(wrapped.render().text());
  expect(wrapped.render().text()).toContain('Comment 1');
  expect(wrapped.render().text()).toContain('Comment 2');
});
