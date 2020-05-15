const initUserData = {
  inputName: '',
  inputPhone: '',
  list: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_LIST':
      return {
        list: [...state.list, action.newData],
        inputName: initUserData.inputName,
        inputPhone: initUserData.inputPhone,
      };
    case 'DELETE_LIST':
      return {
        ...state,
        list: action.newList,
      };
    case 'UPDATE_INPUT_NAME':
      return {
        ...state,
        inputName: action.value,
      };
    case 'UPDATE_INPUT_PHONE':
      return { ...state, inputPhone: action.value };
    default:
      return state;
  }
};

export { initUserData, reducer };
