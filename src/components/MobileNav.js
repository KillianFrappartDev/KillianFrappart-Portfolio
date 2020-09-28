import React from 'react';
import { Link } from 'gatsby';

import mobileStyles from '../styles/MobileNav.module.scss';

const MobileNav = (props) => {
  return (
    <React.Fragment>
      <div className={mobileStyles.container}>
        <nav>
          <ul className={mobileStyles.list}>
            <li className={mobileStyles.item}>
              <Link to="/">Home</Link>
            </li>
            <li className={mobileStyles.item}>
              <Link to="/skills">Skills</Link>
            </li>
            <li className={mobileStyles.item}>
              <Link to="/projects">Projects</Link>
            </li>
            <li className={mobileStyles.item}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className={mobileStyles.cancel} onClick={props.click}>
          <i class="fas fa-times"></i>
        </div>
      </div>
      <div className={mobileStyles.backdrop} onClick={props.click}></div>
    </React.Fragment>
  );
};

export default MobileNav;
