import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
//renders just the instance of our given component and none of its children
//use absolute import paths from the src directory:
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;

beforeEach(() => {
  //before each test inside of this file we're going to do some common setup logic
  //let's render instance of App using our shallow function
  wrapped = shallow(<App />);
  //wrapped - meaning that the object returned from this is the wrapped version of our App component, wrapped - specifically means that this is a component that has some additional functionality loaded on top
  //shallow render
});

it('renders to screen', () => {
  const div = document.createElement('div');
  //fake div created w JSDOM library, solely inside the memory, inside the terminal, not created in the DOM in the browser

  ReactDOM.render(
    <Root>
      <App />
    </Root>,
    div
  );

  //cleanup after our test run
  //optimize app performance
  ReactDOM.unmountComponentAtNode(div);
});

it('shows a comment box', () => {
  //write some code (expectation) that looks inside the App - the wrapped object - and checks to see if the CommentBox is in there (CommentBox is here a placeholder, a bookmark of sorts for that component, it doesn't get rendered)
  expect(wrapped.find(CommentBox).length).toEqual(1);
  //we can check length because it is an array

  //try to make your test break
  //expect(wrapped.find(CommentBox).length).toEqual(9);
  //to see if it's doing correctly what it's supposed to be doing
});

it('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
  //expectation
});
