import { useReducer, useCallback } from 'react';
import { reducer, initUserData } from '../reducer/phoneReducer';

const useData = () => {
  const [userData, dispatch] = useReducer(reducer, initUserData);

  const updateInputValue = useCallback((e) => {
    e.target.name === 'name'
      ? dispatch({ type: 'UPDATE_INPUT_NAME', value: e.target.value })
      : dispatch({ type: 'UPDATE_INPUT_PHONE', value: e.target.value });
  });

  const addUserData = useCallback(() => {
    dispatch({
      type: 'ADD_LIST',
      newData: {
        name: userData.inputName,
        phone: userData.inputPhone,
      },
    });
  });

  const deleteUserData = useCallback((num) => {
    dispatch({
      type: 'DELETE_LIST',
      newList: userData.list.filter((_, i) => i !== num),
    });
  });

  return [userData, updateInputValue, addUserData, deleteUserData];
};

export default useData;
