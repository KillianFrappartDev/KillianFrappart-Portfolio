import React from 'react';
import { Link } from 'gatsby';

import navStyles from '../styles/Nav.module.scss';

const Nav = (props) => {
  return (
    <nav>
      <ul className={navStyles.list}>
        <li onClick={props.click} className={navStyles.hamburger}>
          <i class="fas fa-bars"></i>
        </li>
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
