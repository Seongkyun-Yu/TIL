import { useReducer, useCallback } from 'react';
import { initData, reducer } from '../Reducer/boardReducer';

const useBoardData = () => {
  const [state, dispatch] = useReducer(reducer, initData);

  const logIn = useCallback(() => {
    const canLogIn = state.users.find(
      (user) =>
        user.id === state.inputState.id &&
        user.password === state.inputState.pass,
    );

    if (canLogIn) dispatch({ type: 'LOG_IN', loginId: state.inputState.id });
  }, [state]);

  const logOut = useCallback(() => {
    dispatch({ type: 'LOG_OUT' });
  }, [state]);

  const insertNewBoard = useCallback(
    (e) => {
      if (e.keyCode !== 13) return;

      dispatch({
        type: 'INSERT_BOARD',
        newBoard: { title: state.inputState.board, menu: [] },
      });
      e.target.value = '';
    },
    [state],
  );

  const deleteBoard = useCallback(
    (index) => {
      dispatch({
        type: 'DELETE_BOARD',
        deleteIndex: index,
      });
    },
    [state],
  );

  const inputMenu = useCallback(
    (e, menuState, setMenuState, index) => {
      if (e.keyCode !== 13) return;

      dispatch({
        type: 'INPUT_MENU',
        boardIndex: index,
        newMenu: menuState,
        setMenu: setMenuState,
      });
    },
    [state],
  );

  const inputChange = useCallback(
    (e) => {
      dispatch({
        type: 'INPUT_CHANGE',
        inputName: e.target.name,
        newInputData: e.target.value,
      });
    },
    [state],
  );

  return [
    state,
    logIn,
    logOut,
    insertNewBoard,
    deleteBoard,
    inputMenu,
    inputChange,
  ];
};

export default useBoardData;
