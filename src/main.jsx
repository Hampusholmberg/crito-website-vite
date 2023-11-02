import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/Index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home         from './pages/Home/Home';
import Contact      from './pages/Contact/Contact';
import News         from './pages/News/News';
import NotFound     from './pages/Not_Found/NotFound';
import NewsDetails  from './pages/News_Details/NewsDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/news' element={<News/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path="/*" element={<NotFound/>} />
          <Route path="/news/:id" element={<NewsDetails/>} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode> 
);