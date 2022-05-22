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

        <Link to="/medailonK" className="odkaz">
          Klára Chmelařová
        </Link>

        <Link to="/medailonP" className="odkaz">
          Pavla Bukovská
        </Link>
      </div>
    </>
  );
};

<>
  <header>
    <div className="logo">
      <a className="logo--odkaz" href="./index.html">
        LeXie
      </a>
    </div>
    <Link to="/projekt" className="odkaz">
      O projektu
    </Link>

    <Link to="/medailonK" className="odkaz">
      Klára Chmelařová
    </Link>

    <Link to="/medailonP" className="odkaz">
      Pavla Bukovská
    </Link>
  </header>
</>;
