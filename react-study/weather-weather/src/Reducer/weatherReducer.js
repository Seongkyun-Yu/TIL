const weatherInit = {
  loading: false,
  location: {
    latitude: 1,
    longitude: 1,
    addr: '',
  },
  day1: [],
  day2: [],
  day3: [],
};

const weatherReducer = (state, action) => {
  switch (action.type) {
    case 'SUCCESS':
      return state;
    case 'ERROR':
      return {
        ...state,
        loading: false,
      };
    default:
      throw new Error('이상한 dispatch 명령 사용함');
  }
};

export { weatherInit, weatherReducer };
