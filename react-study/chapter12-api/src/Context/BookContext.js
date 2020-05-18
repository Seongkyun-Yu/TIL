import React, { createContext } from 'react';
import useFetch from '../hook/useFetch';

export const BookContext = createContext(null);

// 위의 두 컨텍스트로 감싼 프로바이더 그룹에 자식 컴포넌트들을 전달하는 포맷을 생성했습니다.
export function BookProvider({ children }) {
  const [state, fetchData, addPhone, deletePhone, changeInput] = useFetch();
  const ContextValue = {
    state,
    fetchData,
    addPhone,
    deletePhone,
    changeInput,
  };
  return (
    <BookContext.Provider value={ContextValue}>{children}</BookContext.Provider>
  );
}
