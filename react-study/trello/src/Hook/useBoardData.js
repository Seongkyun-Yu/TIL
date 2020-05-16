import React, { useReducer } from 'react';
import { initData, reducer } from '../Reducer/boardReducer';

const useBoardData = () => {
  const [state, dispatch] = useReducer(reducer, initData);

  const insertNewBoard = (e) => {
    if (e.keyCode !== 13) return;

    // const menuBoards = [...menuState, { title: e.target.value, menu: [] }];
    // setMenuState(menuBoards);

    dispatch({
      type: 'INSERT_BOARD',
      newBoard: { title: state.InputState.InputId, menu: [] },
    });

    e.target.value = '';
  };

  const deleteBoard = (index) => {
    // menuBoards = menuState.filter((_, i) => i !== index);
    // setMenuState(menuBoards);

    dispatch({
      type: 'DELETE_BOARD',
      deleteIndex: index,
    });
  };

  const inputMenu = (e, index) => {
    if (e.keyCode !== 13) return;

    const menuBoards = menuState.map((Board, i) => {
      if (index === i) {
        Board.menu = [...Board.menu, e.target.value];
        return Board;
      }

      return Board;
    });

    setMenuState(menuBoards);

    e.target.value = '';
  };

  return [state];
};

export default useBoardData;
