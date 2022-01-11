import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Root from 'Root';
import App from 'components/App';

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<App />} />
      </Routes>
    </BrowserRouter>
  </Root>,
  document.querySelector('#root')
);
//App component passed to the Root component as a child - Root component receives it on its props object, can access it at props.children, what we do in Root.js

//Root component is entirely responsible for booting up our Redux store and placing the Provider tag and then rendering any children that it's provided

//BrowserRouter - will be responsible for deciding what to show on screen based on what the user is looking at, which url the user provided
