import { useReducer, useCallback } from 'react';
import * as _ from 'lodash';

import { reducer, initData } from '../Reducer/gameReducer';

const useGameData = () => {
  const [state, dispatch] = useReducer(reducer, initData);

  // console.log(state);

  const bingo = useCallback((board) => {
    // X축용 변수
    let regxX1 = '';
    let regxX2 = '';

    for (let i = 0; i < 3; i++) {
      // 가로축 검사
      let regx = '';
      regx = board[i].join('');
      if ((regx.match(/O/g) || []).length === 3) return 'O';
      if ((regx.match(/X/g) || []).length === 3) return 'X';

      // 세로축, X축 용 변수 할당
      regx = '';
      for (let j = 0; j < 3; j++) {
        regx += board[j][i];
        if (i === j) regxX1 += board[j][i];
        if (i + j === 2) regxX2 += board[j][i];
      }

      // 세로축 검사
      if ((regx.match(/O/g) || []).length === 3) return 'O';
      if ((regx.match(/X/g) || []).length === 3) return 'X';

      // X축 검사
      if ((regxX1.match(/O/g) || []).length === 3) return 'O';
      if ((regxX1.match(/X/g) || []).length === 3) return 'X';

      if ((regxX2.match(/O/g) || []).length === 3) return 'O';
      if ((regxX2.match(/X/g) || []).length === 3) return 'X';
    }

    return '';
  }, []);

  const checkBoard = useCallback(
    (row, col) => {
      if (state.nowGame[row][col] || state.winner) return;

      const mark = state.history.length % 2 ? 'O' : 'X';
      const newGame = _.cloneDeep(state.nowGame);

      newGame[row][col] = mark;

      // setHistoryState([...state.history, state.nowGame]);
      dispatch({
        type: 'SET_HISTORY',
        pastGame: state.nowGame,
      });
      // setNowGameState(newGame);
      dispatch({
        type: 'SET_NOWGAME',
        newGame,
      });

      // setWinner(bingo(newGame));
      dispatch({
        type: 'SET_WINNER',
        winner: bingo(newGame),
      });
    },
    [bingo, state.history.length, state.nowGame, state.winner],
  );

  const backsies = useCallback(
    (num) => {
      const newGamesState = _.cloneDeep(state.history);
      // setNowGameState(newGamesState[num]);
      dispatch({
        type: 'SET_NOWGAME',
        newGame: newGamesState[num],
      });
      // setHistoryState(newGamesState.slice(0, num));
      dispatch({
        type: 'SET_BACKSIES',
        newHistoryGame: newGamesState.slice(0, num),
      });
      // setWinner('');
      dispatch({
        type: 'SET_WINNER',
        winner: '',
      });
    },
    [state],
  );

  return [state, checkBoard, backsies];
};

export default useGameData;
