import React from 'react';
import './style.css';
import foto from '../img/Klara.png';

export const Medailon = ({ id, jmeno, popis, foto }) => {
  return (
    <>
      <div className="medailonek">
        <img className="foto" src={foto} alt="foto " />
        <div className="popis">
          <h2>Něco o mně:</h2>
          {jmeno}
          {popis}
        </div>
      </div>
    </>
  );
};

/*const popis1 =(
  <>
    <p>
      Ahoj, mám vystudovanou VŠ v oboru Kondiční specialista (v překladu
      trenér). Sport mám ráda, ale v oboru pracovat nechci.. Jeden z důvodů, je
      časová náročnost. Dále jsem absolvovala několik kurzů jako třeba:
      sportovní masáže, výživa. Stihla jsem i erasmus v Norsku. Ve své práci
      chci něco vytvářet, vymýšlet a vidět výsledek. Také proto jsem si vybrala
      front-end.
    </p>
    <p>
      V současné době pracuji jako asistent/ekonom ve webové redakci. A v blízké
      době chci změnit obor a věnovat se IT.
    </p>
    <p>
      Ráda poznávám nová místa a chutě, čtu, peču, sportuji, jsem v přírodě a
      jezdím na koni.
    </p>
    <p>
      Myslím si, že sem kamarádská, někdy trochu trhlá a taky upovídaná (musím
      ale člověka nejdřív trochu poznat).
    </p>
    <p>
      Mám ráda asijskou kuchyni, sem tam filozofování o životě a vymýšlení
      nových nápadů.
    </p>
  </>,
);

let popis2 = (
  <>
    <p>
      Vystudovala jsem Matematické metody v ekonomii na VŠE a Projektové řízení
      na ČZU. Žila jsem celý život v Praze, ale teď jsem se přestěhovala do
      Úval.
    </p>
    <p>
      Pracovala jsem v Equa bank na pozici produktového analytika - půjčky a
      hypotéky.
    </p>
    <p>Ráda chodím ven - kolo, lyže, procházky.</p>
    <p>
      Jsme máma dvou malých kluků. Jsem introvert, ale extrovert občas převezme
      otěže..
    </p>
    <p>
      Věnuji se taiči a to již dlouho. Moje první webovky, byly právě o taiči.
    </p>
  </>
);*/
