import React from 'react';
import List from './Components/List';
import InputGroup from './Components/InputGroup';
import { PhoneState } from './Context/PhoneContext';
import { usePhoneState, usePhoneDispatch } from './Context/PhoneContext';

const App: React.FC = () => {
  const { inputState, phoneState } = usePhoneState();
  const dispatch = usePhoneDispatch();

  //InputGroup 에서 함수로 넘겨주는 값에 대한 타입 지정이 필요!
  const onChange = (name: string, value: string): void => {
    dispatch({ type: 'CHANGE_INPUT', name, value });
  };

  //함수가 아무것도 반환하지 않으니까 반환 타입은 void
  const onClick = (): void => {
    //새로운 전화번호를 생성할 때도, 우리가 준비해둔 PhoneState 객체를 이용해 타입 지정!
    const newPhone: PhoneState = {
      id: phoneState.length + 1,
      name: inputState.name,
      number: inputState.number,
    };
    dispatch({ type: 'ADD_PHONES', newPhone: newPhone });
  };
  return (
    <div className="App">
      <ul>
        {phoneState.map((p, i) => {
          return <List key={i} phone={p} />;
        })}
      </ul>
      {/* 타입스크립트를 사용하면서 부터, 상단에 정의하고 실제 해당 컴포넌트에서 함수를 사용하지 않으면 
      
        Property 'XXX' does not exist on type 'IntrinsicAttributes & ~~~ 오류를 보게 됩니다
      */}
      <InputGroup
        onChange={onChange}
        onClick={onClick}
        inputState={inputState}
      />
    </div>
  );
};

export default App;
