import React, {
  useReducer,
  useContext,
  createContext,
  Dispatch,
  ReactChild,
  ReactChildren,
} from 'react';

//전화번호부 안에 데이터가 어떤 타입으로 구성이 되어야 할지, 타입을 정합니다.
type State = {
  phoneState: PhoneState[];
  inputState: InputState;
};

//State 안은 PhoneState 객체 리스트와 인풋 관련 상태 관리로 채워져 있으므로, 각각의 타입지정이 필요합니다.
export type PhoneState = {
  id: number;
  name: string;
  number: string;
};

export type InputState = {
  name: string;
  number: string;
};

//열거형식으로 액션은 이 세가지 경우 외에 요청이 될 땐, 타입 에러가 발생하게 타입 지정을 해줍니다.
type Action =
  | { type: 'ADD_PHONES'; newPhone: PhoneState }
  | { type: 'DELETE_PHONES'; id: number }
  | { type: 'CHANGE_INPUT'; name: string; value: string };

//React 자체에서 Dispatch를 순전히 타입을 위해 꺼내올 수 있는데,
//이 때 액션을 제네릭 타입으로 타입 지정을 해줘서 위에서 정의한 액션들에 따른 범용성을 갖게 합니다.
type PhoneDispatch = Dispatch<Action>;

const initialState = {
  phoneState: [
    {
      id: 0,
      name: '김건희',
      number: '01080775647',
    },
  ],
  inputState: {
    name: '',
    number: '',
  },
};

//자주 보던 state와 dispatch 컨텍스트를 각각 선언하는 코드입니다.
//각 컨텍스트도 다루는 데이터 타입이 다르기 때문에, 아래와 같이 제네릭으로 타입이 있을 때와 없을때를 타입지정 해줍니다.
const PhoneStateContext = createContext<State | null>(null);
const PhoneDispatchContext = createContext<PhoneDispatch | null>(null);

//리듀서의 타입 지정을 어떻게 했는지 유념히 보세요!
//State전체가 리듀서의 타입이 됩니다. 즉, 다룰 데이터가 뭔지가 타입 지정의 키 입니다.
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD_PHONES':
      return {
        inputState: state.inputState,
        phoneState: state.phoneState.concat(action.newPhone),
      };
    case 'DELETE_PHONES':
      return {
        inputState: state.inputState,
        phoneState: state.phoneState.filter((p) => p.id !== action.id),
      };
    case 'CHANGE_INPUT':
      return {
        inputState: {
          ...state.inputState,
          [action.name]: action.value,
        },
        phoneState: state.phoneState,
      };
    default:
      throw new Error('Unhandled action');
  }
}
interface AuxProps {
  children: ReactChild | ReactChildren;
}
//export const PhoneContextProvider = ({ children }: AuxProps) => {
export const PhoneContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <PhoneStateContext.Provider value={state}>
      <PhoneDispatchContext.Provider value={dispatch}>
        {children}
      </PhoneDispatchContext.Provider>
    </PhoneStateContext.Provider>
  );
};

// state 와 dispatch 를 쉽게 사용하기 위한 커스텀 Hooks
export function usePhoneState() {
  const state = useContext(PhoneStateContext);
  if (!state) throw new Error('Cannot find SampleProvider'); // 유효하지 않을땐 에러를 발생
  return state;
}

export function usePhoneDispatch() {
  const dispatch = useContext(PhoneDispatchContext);
  if (!dispatch) throw new Error('Cannot find SampleProvider'); // 유효하지 않을땐 에러를 발생
  return dispatch;
}
