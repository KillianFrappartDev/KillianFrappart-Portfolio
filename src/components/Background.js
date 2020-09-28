import React, { useState } from 'react';

import Nav from './Nav';
import Social from './Social';
import MobileNav from './MobileNav';
import backgroundStyles from '../styles/Background.module.scss';

const Background = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen(true);
  };

  const closeHandler = () => {
    setIsOpen(false);
  };

  return (
    <div className={backgroundStyles.background}>
      {isOpen ? (
        <MobileNav click={closeHandler} />
      ) : (
        <Nav click={openHandler} />
      )}
      <Social />
      {props.children}
    </div>
  );
};

export default Background;
