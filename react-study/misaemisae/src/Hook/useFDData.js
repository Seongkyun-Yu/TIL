import { useEffect, useReducer } from 'react';
import { initDustData, reducer } from '../Reducer/fineDustReducer';
import { fineDustApi } from '../Api/fineDustApi';

const useFDData = () => {
  const [state, dispatch] = useReducer(reducer, initDustData);

  const fetchDustData = async () => {
    try {
      dispatch({ type: 'LOADING' });
      const dustData = await fineDustApi.get();

      if (dustData.status === 200)
        dispatch({ type: 'SUCCESS', dustData: dustData.data });
      else
        dispatch({
          type: 'ERROR',
          error: { state: true, message: dustData.statusText },
        });
    } catch (error) {
      dispatch({
        type: 'ERROR',
        error: {
          state: true,
          error: error.message,
        },
      });
    }
  };

  const dustQuality = (dustData) => {
    if (dustData < 12) return { state: '좋음', className: 'far fa-smile-wink' };
    else if (dustData < 35) return { state: '보통', className: 'far fa-smile' };
    else if (dustData < 150)
      return { state: '나쁨', className: 'far fa-frown' };
    else return { state: '매우나쁨', className: 'far fa-dizzy' };
  };

  useEffect(() => {
    fetchDustData();
  }, []);

  return [state, fetchDustData, dustQuality];
};

export default useFDData;
