import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Projekt } from './Projekt/index.jsx';
import { Medailon } from './Medailon/index.jsx';
import { Common } from './Common';
import foto1 from './img/slon.png';
import fotoKlara from './img/Klara.png';
import fotoPaja from './img/Paja.png';
import { Link, BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

const App = () => (
  <>
    <h1>LeXie</h1>
    <img className="slon--img" src={foto1} alt="slon" />

    <Link to="/projekt" className="homepage">
      O projektu
    </Link>

    <Link id="klara" to="/medailon/Klara" className="homepage">
      Klára Chmelařová
    </Link>

    <Link id="paja" to="/medailon/Pavla" className="homepage">
      Pavla Bukovská
    </Link>
  </>
);

const popis = [
  { id: '1', 
    jmenoCesta: "Klara",
    jmeno: 'Klára Chmelařová', 
    popis1: "Ahoj, mám vystudovanou VŠ v oboru Kondiční specialista (v překladu trenér). Sport mám ráda, ale v oboru pracovat nechci.. Jeden z důvodů, je časová náročnost. Dále jsem absolvovala několik kurzů jako třeba: sportovní masáže, výživa. Stihla jsem i erasmus v Norsku. Ve své práci chci něco vytvářet, vymýšlet a vidět výsledek. Také proto jsem si vybrala front-end.",
    popis2: "V současné době pracuji jako asistent/ekonom ve webové redakci. A v blízké době chci změnit obor a věnovat se IT.",
    popis3: "Ráda poznávám nová místa a chutě, čtu, peču, sportuji, jsem v přírodě a jezdím na koni.",
    popis4: "Myslím si, že sem kamarádská, někdy trochu trhlá a taky upovídaná (musím ale člověka nejdřív trochu poznat).",
    popis5: "Mám ráda asijskou kuchyni, sem tam filozofování o životě a vymýšlení nových nápadů.",
    foto: fotoKlara },
  { id: '2', 
    jmenoCesta: "Pavla",
    jmeno: "Pavla Bukovská", 
    popis1: "Vystudovala jsem Matematické metody v ekonomii na VŠE a Projektové řízení na ČZU. Žila jsem celý život v Praze, ale teď jsem se přestěhovala do Úval.", 
    popis2: "Pracovala jsem v Equa bank na pozici produktového analytika - půjčky a hypotéky.", 
    popis3: "Ráda chodím ven - kolo, lyže, procházky.", 
    popis4: "Jsme máma dvou malých kluků. Jsem introvert, ale extrovert občas převezm otěže..", 
    popis5: "Věnuji se taiči a to již dlouho. Moje první webovky, byly právě o taiči.", 
    foto: fotoPaja },
];

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/" element={<Common />}>
        <Route path="projekt" element={<Projekt />} />

        <Route path="medailon">
          {popis.map((medailon) => <Route path={medailon.jmenoCesta} element={<Medailon 
              key={medailon.id}
              jmeno={medailon.jmeno}
              popis1={medailon.popis1}
              popis2={medailon.popis2}
              popis3={medailon.popis3}
              popis4={medailon.popis4}
              popis5={medailon.popis5}
              foto={medailon.foto} />}/>)
          }
        </Route>  
      </Route>
    </Routes>
  </BrowserRouter>,
);
