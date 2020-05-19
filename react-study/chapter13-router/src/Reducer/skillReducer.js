import React from 'react';

const initData = {
  skills: [
    { id: 1, title: 'HTML', description: 'HTML is ...' },
    { id: 2, title: 'JS', description: 'JS is ...' },
    { id: 3, title: 'React', description: 'React is ...' },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return state;
    default:
      return state;
  }
};

export { initData, reducer };
