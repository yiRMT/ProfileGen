import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./views/Home";

const App = () => {
  return (
    <div className='App'>
      <Home />
    </div>
  );
};

export default App;