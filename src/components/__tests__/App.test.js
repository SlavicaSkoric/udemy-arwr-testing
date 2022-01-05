import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('renders to screen', () => {
  const div = document.createElement('div');
  //fake div created w JSDOM library, solely inside the memory, inside the terminal, not created in the DOM in the browser

  ReactDOM.render(<App />, div);

  ReactDOM.unmountComponentAtNode(div);
});

it('shows a comment box', () => {
  const div = document.createElement('div');

  ReactDOM.render(<App />, div);

  //write some code that looks inside the div and checks to see if the CommentBox is in there
  //console.log(div.innerHTML);
  expect(div.innerHTML).toContain('Comment Box');

  //cleanup after our test run
  //optimize app performance
  ReactDOM.unmountComponentAtNode(div);
});
