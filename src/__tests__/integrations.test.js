import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  moxios.install();
  //set up moxios and tell it to intercept any request that axios tries to issue
  //trick axios (stub the req coming to this url and configure the response according to this configuration object):
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [
      {
        name: 'Fetched #1',
      },
      {
        name: 'Fetched #2',
      },
    ],
  });
});

afterEach(() => {
  moxios.uninstall();
  //do some cleanup
  //to make sure it doesn't affect some other tests inside of our test suite
});

it('can fetch a list of comments and display them', (done) => {
  //general approach that we're going to use:
  // 1 - attempt to render the entire app
  // 2 - find the 'fetchComments' button and click it
  // 3 - expect to find a list of comments

  //1:
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  //2:
  wrapped.find('.fetch-comments').simulate('click');

  //3:
  //introduce a tiny little pause to let moxios do its thing:
  //moxios.wait(() => {
  setTimeout(() => {
    //we explicitly tell our app to update itself
    wrapped.update();

    expect(wrapped.find('li').length).toEqual(2);

    //assert done to jest
    done();
    wrapped.unmount();
  }, 1000);
});
