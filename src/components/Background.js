import React from 'react';

import Nav from './Nav';
import backgroundStyles from '../styles/Background.module.scss';

const Background = (props) => {
  return (
    <div className={backgroundStyles.background}>
      <Nav />
      {props.children}
    </div>
  );
};

export default Background;
