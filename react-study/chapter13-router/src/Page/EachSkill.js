import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { SkillContext } from '../Context/SkillContext';

const EachSkill = () => {
  const context = useContext(SkillContext);
  const { skills } = context;

  var params = useParams();
  var content_id = params.content_id;
  var selected_topic = {
    title: '죄송합니다',
    description: '해당 공부내용을 찾지 못했습니다',
  };
  for (var i = 0; i < skills.length; i++) {
    if (skills[i].id === Number(content_id)) {
      selected_topic = skills[i];
      break;
    }
  }
  return (
    <div>
      <h2>공부한 내용입니다.</h2>
      <h3>{selected_topic.title}</h3>
      {selected_topic.description}
    </div>
  );
};

export default EachSkill;
