import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Books from './components/Home';
import Nav from './components/Nav';
import Categories from './components/Categories';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav className="App" />}>
            <Route index element={<Books />} />
            <Route path="categories" element={<Categories />} />
            <Route path="*" element={<div>Page not found 404!</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
