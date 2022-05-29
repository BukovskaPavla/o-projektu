import React from 'react';
import './style.css';


export const Medailon = ({ id, jmeno, popis, foto }) => {
  return (
    <>
      <div className="medailonek">
        <img className="foto" src={foto} alt="foto " />
        <div className="popis">
          <h2>{jmeno}</h2>
          {popis.map((popisek) => <p>{popisek}</p>)}
        </div>
      </div>
    </>
  );
};

