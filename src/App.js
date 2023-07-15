import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './components/Home';
import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav className="App" />}>
          <Route index element={<Books />} />
          <Route path="categories" />
          <Route path="*" element={<div>Page not found 404!</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
