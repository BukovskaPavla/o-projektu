import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Header = () => {
  return (
    <>
      <Link to="/" className="logo--odkaz">
        LeXie
      </Link>
      <div className="rozcestnik">
        <Link to="/projekt" className="odkaz">
          O projektu
        </Link>

        <Link to="/medailon" className="odkaz">
          Klára Chmelařová
        </Link>

        <Link to="/medailon" className="odkaz">
          Pavla Bukovská
        </Link>
      </div>
    </>
  );
};
