import React from 'react';
import './style.css';

export const Medailon = ({ id, jmeno, popis1, popis2, popis3, popis4, popis5, foto }) => {
  return (
    <>
      <div className="medailonek">
        <img className="foto" src={foto} alt="foto " />
        <div className="popis">
          <h2>Něco o mně:</h2>
          {jmeno}
        <p>{popis1}</p>
        <p>{popis2}</p>
        <p>{popis3}</p>
        <p>{popis4}</p>
        <p>{popis5}</p>
        </div>
      </div>
    </>
  );
};

