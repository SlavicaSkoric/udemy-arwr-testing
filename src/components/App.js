import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/post' exact element={<CommentBox />} />
        <Route path='/' exact element={<CommentList />} />
      </Routes>
    </div>
  );
}
