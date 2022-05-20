import React from 'react';
import './style.css';

import { Outlet, Link } from 'react-router-dom';
const Menu = () => (
  <>
    <img className="slon--img" src="img/slon.png" alt="slon" />
    <Link to="/projekt" className="odkaz">
      O projektu
    </Link>

    <Link to="/medailon" className="odkaz">
      Pavla Bukovská
    </Link>

    <Link to="/medailon" className="odkaz">
      Klára Chmelařová
    </Link>
    <Outlet />
  </>
);

export default Menu;
