import React from 'react';
import './style.css';

const Medailon = () => {
  return (
    <>
      <header>
        <div className="logo">
          <a className="logo--odkaz" href="./index.html">
            LeXie
          </a>
        </div>
        <div className="my">
          <a className="my--oProjektu" href="./projekt.html">
            O projektu
          </a>
          <a className="my--Paja" href="./paja.html">
            Pavla Bukovská
          </a>
          <a className="my--Klara" href="./klara.html">
            Klára Chmelařová
          </a>
        </div>
      </header>
      <div className="medailonek">
        <img src="./img/Klara.png" alt="foto Klára" />
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

export default Medailon;
