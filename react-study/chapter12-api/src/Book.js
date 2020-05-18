import React, { useContext } from 'react';
import List from './List';
import useFetch from './hook/useFetch';
import { BookContext } from './Context/BookContext';

const Book = () => {
  const BookContextValue = useContext(BookContext);
  const state = BookContextValue.state;
  const { loading, error, bookState: book } = state;
  if (loading) return <h3>로딩중 ... ...</h3>;
  if (error.state) return <h3>에러사항:{error.message}</h3>;
  return (
    <div>
      <h1>무한반복 전화번호부 with API</h1>
      이름:
      <input
        type="text"
        name="name"
        value={state.inputState.name}
        onChange={BookContextValue.changeInput}
      />
      번호:
      <input
        type="text"
        name="phone"
        value={state.inputState.phone}
        onChange={BookContextValue.changeInput}
      />
      <button onClick={() => BookContextValue.addPhone()}>저장</button>
      <div>
        <List book={book} deletePhone={BookContextValue.deletePhone} />
      </div>
    </div>
  );
};

export default Book;
