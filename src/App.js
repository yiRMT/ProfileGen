import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Login from "./views/Login";

const App = () => {

  return (
    <div className='App'>
        <div className="container">
          <BrowserRouter>
            <Routes>
              <Route path={`/`} element={<Login/>} />
            </Routes>
          </BrowserRouter>
        </div>
    </div>
  );
};
export default App;

