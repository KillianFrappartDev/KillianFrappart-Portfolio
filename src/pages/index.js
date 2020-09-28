import React from 'react';

import Nav from '../components/Nav';
import homeStyles from '../styles/Home.module.scss';
import '../styles/index.scss';

export default function Home() {
  return (
    <div className={homeStyles.container}>
      <div className={homeStyles.shadow}>
        <Nav />
      </div>
    </div>
  );
}
