import React from 'react';

import Nav from './Nav';
import Social from './Social';
import backgroundStyles from '../styles/Background.module.scss';

const Background = (props) => {
  return (
    <div className={backgroundStyles.background}>
      <Nav />
      <Social />
      {props.children}
    </div>
  );
};

export default Background;
