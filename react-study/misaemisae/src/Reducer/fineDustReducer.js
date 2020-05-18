const initDustData = {
  dustData: [],
  error: {
    state: false,
    message: null,
  },
  loading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'SUCCESS':
      return {
        ...state,
        dustData: action.dustData.RealtimeCityAir.row,
        loading: false,
      };
    case 'ERROR':
      return {
        ...state,
        error: {
          state: true,
          message: action.message,
          loading: false,
        },
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export { initDustData, reducer };
