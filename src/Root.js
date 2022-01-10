import React from 'react';
import { Provider } from 'react-redux';
//Provider is a React component that communicates directly with every connect function in our Redux app - they work together to give us/our components access to our Redux store
import { createStore } from 'redux';
import reducers from 'reducers';

const Root = (props) => {
  return (
    <Provider store={createStore(reducers, {})}>{props.children}</Provider>
  );
};
//empty object passed into createStore signifies our initial state
//we use createStore to pass Provider a store and the reducers we created

export default Root;

//Root component is entirely responsible for booting up our Redux store and placing the Provider tag and then rendering any children that it's provided
