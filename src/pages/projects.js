import React from 'react';

import Carousel from '../components/Carousel';
import Background from '../components/Background';

const PROJECTS = [
  { title: 'Chat Group', imgURL: 'project-1.png' },
  { title: 'ADN Clone', imgURL: 'project-2.png' },
];

const projects = () => {
  return (
    <Background>
      <Carousel items={PROJECTS} />
    </Background>
  );
};

export default projects;
