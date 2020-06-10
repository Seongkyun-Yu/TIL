import React from 'react';
import { PhoneState } from '../Context/PhoneContext';

//Context에서 정의했던 Phone 객체에 대한 타입을 가져와 props에 타입지정을 해줍니다.
const List = ({ phone }: { phone: PhoneState }) => {
  return <li>{`${phone.id}. ${phone.name} : ${phone.number}`}</li>;
};

export default Li;
