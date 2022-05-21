import React from 'react';
import { Header } from '../Header';
import "./style.css"

export const MedailonP = () => {
  return (
    <>
      <Header />
      <div className="medailonek">
        <img src="./img/Paja.png" alt="foto Pája" />
        <div className="popis">
          <h2>Něco o mně:</h2>
            <p>Vystudovala jsem Matematické metody v ekonomii na VŠE a Projektové řízení na ČZU. Žila jsem celý život v Praze, ale teď jsem se přestěhovala do Úval.</p>
            <p>Pracovala jsem v Equa bank na pozici produktového analytika - půjčky a hypotéky.</p> 
            <p>Ráda chodím ven - kolo, lyže, procházky.</p>
            <p>Jsme máma dvou malých kluků. Jsem introvert, ale extrovert občas převezme otěže..</p>
            <p>Věnuji se taiči a to již dlouho. Moje první webovky, byly právě o taiči.</p>
        </div>
      </div>
    </>
  );
};
