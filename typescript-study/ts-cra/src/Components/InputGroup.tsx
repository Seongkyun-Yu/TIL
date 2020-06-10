import React from 'react';
import { InputState } from '../Context/PhoneContext';

//넘겨받는 모든 props에 대해 타입 지정을 해줘야 합니다.
type InputGroupProps = {
  onChange: (name: string, value: string) => void;
  onClick: () => void;
  inputState: InputState;
};

//상단에서 정한 타입을 적용합니다.
const InputGroup = ({ onChange, onClick, inputState }: InputGroupProps) => {
  return (
    <div>
      <input
        type="text"
        name="name"
        value={inputState.name}
        onChange={(e) => onChange(e.target.name, e.target.value)}
      />
      <input
        type="text"
        name="number"
        value={inputState.number}
        onChange={(e) => onChange(e.target.name, e.target.value)}
      />
      <button onClick={onClick}>번호등록</button>
    </div>
  );
};

export default InputGroup;
