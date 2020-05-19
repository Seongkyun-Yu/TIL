import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import SubRouter from '../Router/SubRouter';
import { SkillContext } from '../Context/SkillContext';

const Skill = () => {
  const context = useContext(SkillContext);
  const { skills } = context;

  let skillList = [];
  for (var i = 0; i < skills.length; i++) {
    skillList.push(
      <li key={i}>
        <NavLink to={'/Skill/' + skills[i].id}>{skills[i].title}</NavLink>
      </li>,
    );
  }
  return (
    <>
      <h2>Skill Page</h2>
      <hr />
      <ul>{skillList}</ul>
      <hr />
      <SubRouter />
    </>
  );
};

export default Skill;
