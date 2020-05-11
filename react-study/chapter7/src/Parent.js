import React, { useState, useRef } from 'react';
import './App.css';
import Child from './Child';

function Parent() {
  const [lotto, setLotto] = useState([0, 0, 0, 0, 0, 0, 0]);
  const parentLotto = lotto;
  const inputRef = useRef();

  const makeLotto = () => {
    const lotto = [];

    let num;
    for (let i = 0; i < 7; i++) {
      while (true) {
        num = Math.floor(Math.random() * 45 + 1);

        if (!lotto.includes(num)) {
          lotto.push(num);
          break;
        }
      }
    }

    console.log(lotto);

    setLotto(lotto);
  };

  const changeInput = (e) => {
    console.log(e.target.value);
    console.log(inputRef.current.value);
  };

  return (
    <div className="App">
      부모 컴포넌트
      <br />
      <button onClick={makeLotto}>로또 생성기</button>
      <br />
      <input type="text" ref={inputRef} onChange={changeInput} />
      <h1>
        {parentLotto.map((lo, i) => {
          return lo + (i === 6 ? '' : ',');
        })}
      </h1>
      <Child lotto={parentLotto}></Child>
    </div>
  );
}

export default Parent;
