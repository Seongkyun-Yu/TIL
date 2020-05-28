import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//여러분들이 작성중인 예제 기준으로는 /Modules/Phone 입니다.
import { getPhoneAsync } from '../Modules/Phone';
import PhoneDetail from '../Components/PhoneDetail';
import { useParams } from 'react-router-dom';

function PhoneDetailContainer() {
  const params = useParams();
  const { data, loading, error } = useSelector((state) => state.Phone.phone);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhoneAsync(params.id));
  }, [params.id, dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;
  console.log(data);
  return <PhoneDetail phone={data} />;
}

export default PhoneDetailContainer;
