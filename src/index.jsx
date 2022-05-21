import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Projekt } from './Projekt/index.jsx';
import { MedailonK } from './MedailonK/index.jsx';
import { MedailonP } from './MedailonP';

import { Link, BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

const App = () => (
  <>
    <h1>LeXie</h1>
    <img className="slon--img" src="Menu/img/slon.png" alt="slon" />
    <Link to="/projekt" className="odkaz">
      O projektu
    </Link>

    <Link to="/medailonK" className="odkaz">
      Klára Chmelařová
    </Link>

    <Link to="/medailonP" className="odkaz">
      Pavla Bukovská
    </Link>
    <Outlet />
  </>
);

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />{' '}
      <Route path="projekt" element={<Projekt />} />
      <Route path="medailonK" element={<MedailonK />} />
      <Route path="medailonP" element={<MedailonP />} />
    </Routes>
  </BrowserRouter>,
);
