import React from 'react';

const Child = ({ lotto, children }) => {
  console.log(lotto);

  return (
    <>
      <h2>자식 컴포넌트</h2>
      {children}
      <br />
      {lotto.map((lo, i) => {
        return <span key={i}>{lo + (i === 6 ? '' : ',')}</span>;
      })}
    </>
  );
};

export default Child;
