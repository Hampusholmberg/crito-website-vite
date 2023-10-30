import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/Index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home     from './pages/Home/Home';
import Contact  from './pages/Contact/Contact';
import Service  from './pages/Service/Service';
import News     from './pages/News/News';
import NotFound from './pages/Not_Found/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          {/* <Route path='/service' element={<Service/>} /> */}
          <Route path='/news' element={<News/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path="/*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode> 
);