import React, { useState } from 'react';

import Nav from '../components/Nav';
import Social from '../components/Social';
import Header from '../components/Header';
import homeStyles from '../styles/Home.module.scss';
import MobileNav from '../components/MobileNav';
import '../styles/index.scss';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen(true);
  };

  const closeHandler = () => {
    setIsOpen(false);
  };

  return (
    <div className={homeStyles.container}>
      <div className={homeStyles.shadow}>
        {isOpen ? (
          <MobileNav click={closeHandler} />
        ) : (
          <Nav click={openHandler} />
        )}
        <Social />
        <Header />
      </div>
    </div>
  );
}
