import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from "./views/Home";
import SignUpPage from './views/SignUpPage';
import SignInPage from './views/SignInPage';

const App = () => {

  return (
    <div className='App'>
        <div className="container">
          <BrowserRouter>
            <Routes>
              <Route path={`/`} element={<Home/>} />
              <Route path={`/signup`} element={<SignUpPage/>}/>
              <Route path={`/signin`} element={<SignInPage/>}/>
            </Routes>
          </BrowserRouter>
        </div>
    </div>
  );
};
export default App;

