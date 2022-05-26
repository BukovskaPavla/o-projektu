import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Projekt } from './Projekt/index.jsx';
import { Medailon } from './Medailon/index.jsx';

import { Common } from './Common';
import foto1 from './img/slon.png';
import { Link, BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
// Tohle nevím jestli teda nemáme úplně smazat??? :-/
// nebo přejmenovat ba Common :-D
const App = () => (
  <>
    <h1>LeXie</h1>
    <img className="slon--img" src={foto1} alt="slon" />

    <Link to="/projekt" className="homepage">
      O projektu
    </Link>

    <Link id="klara" to="/medailon" className="homepage">
      Klára Chmelařová
    </Link>

    <Link id="paja" to="/medailon" className="homepage">
      Pavla Bukovská
    </Link>
  </>
);
const popis = [
  { id: '1', jmeno: 'Klara', popis1: 'popis1', foto: './img/Klara.png' },
  { id: '2', jmeno: 'Paja', popis2: 'popis2', foto: './img/Paja.png' },
];

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/" element={<Common />}>
        <Route path="projekt" element={<Projekt />} />

        <Route
          path="medailon"
          element={popis.map((e) => (
            <Medailon
              key={e.id}
              jmeno={e.jmeno}
              popis={e.popis1}
              foto={e.foto}
            />
          ))}
        />
        <Route
          path="medailon"
          element={popis.map((e) => (
            <Medailon
              key={e.id}
              jmeno={e.jmeno}
              popis={e.popis2}
              foto={e.foto}
            />
          ))}
        />
      </Route>
    </Routes>
  </BrowserRouter>,
);
