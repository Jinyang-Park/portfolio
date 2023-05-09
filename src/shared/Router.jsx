import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Header from '../pages/Header';
import Home from '../pages/Contact2';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Projects' element={<Projects />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
