import React, { useState } from 'react';

import Background from '../components/Background';
import SkillSet from '../components/SkillSet';
import skillsStyles from '../styles/skills.module.scss';

const SKILLS = [
  {
    title: 'UI/UX',
    text:
      'I have great integration skills, I prefer writing CSS code myself using SCSS but I already worked with both Bootstrap and Material UI and I know how to implement and customize their components.',
    items: [
      { name: 'HTML', url: 'html-5.svg' },
      { name: 'CSS', url: 'css.svg' },
      { name: 'Bootstrap', url: 'Bootstrap.svg' },
      { name: 'Material UI', url: 'mui.svg' },
    ],
  },
  {
    title: 'Front-End',
    text:
      'This is the part I worked the most on! I have an excellent knowledge of JavaScript and how it works. Most of my projects are built with React and I manage my application states through Redux or React Context API ',
    items: [
      { name: 'JavaScript', url: 'js.svg' },
      { name: 'React', url: 'react.svg' },
      { name: 'Redux', url: 'redux.svg' },
    ],
  },
  {
    title: 'Back-End',
    text:
      'My great sense of organization shines when building server side logic. I am familiar with RESTful API architecture using Node/Express and I can work with both SQL and NoSQL databases.',
    items: [
      { name: 'Node', url: 'node.png' },
      { name: 'SQL', url: 'sql.svg' },
      { name: 'Mongo', url: 'mongo.svg' },
    ],
  },
  {
    title: 'Tools',
    text:
      'What could developers do without their tools? I am used to work on Linux, I actively use Git and GitHub and NPM is my favorite package manager.',
    items: [
      { name: 'NPM', url: 'npm.svg' },
      { name: 'Git', url: 'git.svg' },
      { name: 'Bash', url: 'bash.svg' },
    ],
  },
];

const Skills = () => {
  const [current, setCurrent] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = (e) => {
    setCurrent(e.target.innerHTML);
    setIsOpen(true);
  };

  const closeHandler = () => {
    setCurrent('');
    setIsOpen(false);
  };

  return (
    <Background>
      <section className={skillsStyles.container}>
        {!isOpen ? (
          <ul className={skillsStyles.list}>
            <li className={skillsStyles.item} onClick={openHandler}>
              UI/UX
            </li>
            <li className={skillsStyles.item} onClick={openHandler}>
              Front-End
            </li>
            <li className={skillsStyles.item} onClick={openHandler}>
              Back-End
            </li>
            <li className={skillsStyles.item} onClick={openHandler}>
              Tools
            </li>
          </ul>
        ) : (
          <SkillSet
            cancel={closeHandler}
            item={SKILLS.filter((item) => item.title === current)}
          />
        )}
      </section>
    </Background>
  );
};

export default Skills;
