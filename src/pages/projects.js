import React from 'react';

import Carousel from '../components/Carousel';
import Background from '../components/Background';

const PROJECTS = [
  {
    title: 'Chat Group',
    imgURL: '/projects/project-1.png',
    live: 'https://fullstack-project2-chat.web.app/',
    code: 'https://github.com/KillianFrappartDev/fullStack-project2',
  },
  {
    title: 'ADN Clone',
    imgURL: '/projects/project-2.png',
    live: 'https://killianfrappartdev.github.io/ADN-Challenge/',
    code: 'https://github.com/KillianFrappartDev/ADN-Challenge',
  },
  {
    title: 'Shop App',
    imgURL: '/projects/project-3.png',
    live: 'https://fullstack-project1-mern.web.app/',
    code: 'https://github.com/KillianFrappartDev/fullStack-project1',
  },
];

const projects = () => {
  return (
    <Background>
      <Carousel items={PROJECTS} />
    </Background>
  );
};

export default projects;
