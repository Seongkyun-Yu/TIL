/* eslint-disable default-case */
export const initialState = {
  inputState: {
    name: '',
    phone: '',
  },
  bookState: [],
  error: {
    state: false,
    message: null,
  },
  loading: false,
};

export const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        inputState: {
          ...state.inputState,
          [action.name]: action.value,
        },
        bookState: state.bookState,
        error: state.error,
        loading: state.loading,
      };
    case 'LOADING':
      return {
        inputState: initialState.inputState,
        bookState: initialState.bookState,
        error: initialState.error,
        loading: true,
      };
    case 'ERROR':
      return {
        inputState: initialState.inputState,
        bookState: initialState.bookState,
        error: action.error,
        loading: initialState.loading,
      };
    case 'SUCCESS':
      return {
        inputState: state.inputState,
        bookState: action.phone,
        error: initialState.error,
        loading: initialState.loading,
      };
    case 'ADD':
      return {
        inputState: initialState.inputState,
        bookState: state.bookState.concat(action.newPhone),
        error: initialState.error,
        loading: initialState.loading,
      };
    case 'DELETE':
      return {
        inputState: state.inputState,
        bookState: state.bookState.filter((p) => p.id !== action.id),
        error: initialState.error,
        loading: initialState.loading,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
