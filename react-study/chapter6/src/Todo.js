import React from 'react';
// import './Todo.css';

const Todo = ({ todo }) => {
  return (
    <div>
      <h3>
        {todo._id}
        {':  '}
        {todo.title}
        {'   '}
        {todo.active == false ? (
          <span className={'active'}>{'안함'}</span>
        ) : (
          <span className={'inactive'}>{'함'}</span>
        )}
        <button className={'innerButton'}>check</button>
        <button className={'activeButton'}>X</button>
      </h3>
    </div>
  );
};

export default Todo;
