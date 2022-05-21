import React from 'react';
import { Header } from '../Header';
import './style.css';
import foto from "../img/Klara.png"


export const MedailonK = () => {
  return (
    <>
      <Header />
      <div className="medailonek">
      <img className="foto" src={foto} alt="foto Klára" />
        <div className="popis">
          <h2>Něco o mně:</h2>
          <p>
            Ahoj, mám vystudovanou VŠ v oboru Kondiční specialista (v překladu
            trenér). Sport mám ráda, ale v oboru pracovat nechci.. Jeden z
            důvodů, je časová náročnost. Dále jsem absolvovala několik kurzů
            jako třeba: sportovní masáže, výživa. Stihla jsem i erasmus v
            Norsku. Ve své práci chci něco vytvářet, vymýšlet a vidět výsledek.
            Také proto jsem si vybrala front-end.
          </p>
          <p>
            V současné době pracuji jako asistent/ekonom ve webové redakci. A v
            blízké době chci změnit obor a věnovat se IT.
          </p>
          <p>
            Ráda poznávám nová místa a chutě, čtu, peču, sportuji, jsem v
            přírodě a jezdím na koni.
          </p>
          <p>
            Myslím si, že sem kamarádská, někdy trochu trhlá a taky upovídaná
            (musím ale člověka nejdřív trochu poznat).
          </p>
          <p>
            Mám ráda asijskou kuchyni, sem tam filozofování o životě a vymýšlení
            nových nápadů.
          </p>
        </div>
      </div>
    </>
  );
};
