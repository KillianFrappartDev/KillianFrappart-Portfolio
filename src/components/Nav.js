import React from 'react';
import { Link } from 'gatsby';

import navStyles from '../styles/Nav.module.scss';

const Nav = () => {
  return (
    <nav>
      <ul className={navStyles.list}>
        <li className={navStyles.item}>
          <Link to="/">Home</Link>
        </li>
        <li className={navStyles.item}>
          <Link to="/skills">Skills</Link>
        </li>
        <li className={navStyles.item}>
          <Link to="/projects">Projects</Link>
        </li>
        <li className={navStyles.item}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
