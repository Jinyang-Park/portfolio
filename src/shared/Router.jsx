import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Header from '../pages/Header';
import ScrollUpto from '../pages/ScrollUpto';
import ScrollToTopButton from '../pages/ScrollToButton';

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollUpto />
      <Header />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Projects' element={<Projects />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
      </Routes>
      <ScrollToTopButton />
    </BrowserRouter>
  );
};

export default Router;
