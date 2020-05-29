import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPhoneAsync } from '../Modules/Phone';
import PhoneDetail from '../Components/PhoneDetail';
import { useParams } from 'react-router-dom';

function PhoneDetailContainer() {
  const params = useParams();
  const id = Number(params.id);
  // const { data, loading, error } = useSelector((state) => state.Phone.phone);
  const { data, loading, error } = useSelector(
    (state) => state.Phone.phone[id],
  ) || {
    loading: false,
    data: null,
    error: null,
  }; // 아예 데이터가 존재하지 않을 때가 있으므로, 비구조화 할당이 오류나지 않도록
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhoneAsync(id));
  }, [id, dispatch]);

  if (loading && !data) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;
  return <PhoneDetail phone={data} />;
}

export default PhoneDetailContainer;
