import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from "./views/Home";
import SignUpPage from './views/SignUpPage';
import SignInPage from './views/SignInPage';

const App = () => {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;

