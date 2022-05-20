import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './style.css';
import Projekt from './Projekt/projekt.jsx';
import Medailon from './Medailon/medailon.jsx';
import Menu from './Menu/menu.jsx';

import { Link, BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

const App = () => (
  <>
    <h1>LeXie</h1>
    <img className="slon--img" src="img/slon.png" alt="slon" />
    <Link to="/projekt" className="odkaz">
      O projektu
    </Link>

    <Link to="/medailon" className="odkaz">
      Pavla Bukovská
    </Link>

    <Link to="/medailon" className="odkaz">
      Klára Chmelařová
    </Link>
    <Outlet />
  </>
);

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />{' '}
      <Route path="projekt" element={<Projekt />} />
      <Route path="medailon" element={<Medailon />} />
      <Route path="medailon" element={<Medailon />} />
    </Routes>
  </BrowserRouter>,
);
