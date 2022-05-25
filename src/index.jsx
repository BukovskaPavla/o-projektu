import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Projekt } from './Projekt/index.jsx';
import { MedailonK } from './MedailonK/index.jsx';
import { MedailonP } from './MedailonP';
import { Common } from './Common';
import foto from './img/slon.png';

import { Link, BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

const App = () => (
  <>
    <h1>LeXie</h1>
    <img className="slon--img" src={foto} alt="slon" />
    
    <Link to="/projekt" className="homepage">
      O projektu
    </Link>

    <Link to="/medailonK" className="homepage">
      Klára Chmelařová
    </Link>

    <Link to="/medailonP" className="homepage">
      Pavla Bukovská
    </Link>
  
  </>
);

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/" element={<Common />}>
        <Route path="projekt" element={<Projekt />} />
        <Route path="medailonK" element={<MedailonK />} />
        <Route path="medailonP" element={<MedailonP />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
