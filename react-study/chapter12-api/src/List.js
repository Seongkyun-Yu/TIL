import React from 'react';

const List = ({ book, deletePhone }) => {
  return (
    <ul>
      {book.map((b) => {
        return (
          <li key={b.id}>
            {b.name + ':' + b.phone}
            <button onClick={() => deletePhone(b.id)}>삭제</button>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
