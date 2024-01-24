import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import PcInfo from './Components/PcInfo';
import './App.css';
// import Home from './Components/Home';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Login />} />
      <Route path='/pcinfo' element = {<PcInfo />} />
      {/* <Route path='/home' element = {<Home />} /> */}
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
