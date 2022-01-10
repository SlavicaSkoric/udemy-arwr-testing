import React from 'react';
import { Provider } from 'react-redux';
//Provider is a React component that communicates directly with every connect function in our Redux app - they work together to give us/our components access to our Redux store
import { createStore } from 'redux';
import reducers from 'reducers';

//with props destructuring we can make use of setting the initial/default state
const Root = ({ children, initialState = {} }) => {
  return (
    <Provider store={createStore(reducers, initialState)}>{children}</Provider>
  );
};
//empty object passed into createStore signifies our initial state
//we will not pass it in this time, we will pass props.initialState instead, so that we can set it in when and how we need it in our tests
//we use createStore to pass Provider a store and the reducers we created, to preserve state in our store

export default Root;

//Root component is entirely responsible for booting up our Redux store and placing the Provider tag and then rendering any children that it's provided
