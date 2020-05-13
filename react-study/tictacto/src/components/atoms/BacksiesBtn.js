import React from 'react';

const BacksiesBtn = ({ backsies, num }) => (
  <button key={num} type="button" onClick={() => backsies(num)}>
    {num}번째 수로 돌아가기
  </button>
);

export default BacksiesBtn;
