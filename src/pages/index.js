import React from 'react';

import Nav from '../components/Nav';
import Social from '../components/Social';
import Header from '../components/Header';
import homeStyles from '../styles/Home.module.scss';
import '../styles/index.scss';

export default function Home() {
  return (
    <div className={homeStyles.container}>
      <div className={homeStyles.shadow}>
        <Nav />
        <Social />
        <Header />
      </div>
    </div>
  );
}
