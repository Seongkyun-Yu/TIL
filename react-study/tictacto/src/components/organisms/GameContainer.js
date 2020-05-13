/* eslint-disable no-plusplus */
import React, { useState } from 'react';
import * as _ from 'lodash';

import GameBlocks from '../molecules/GameBlocks';
import BacksiesBoard from '../molecules/BacksiesBoard';

import './style/GameContainer.css';

const GameContainer = ({ winner, setWinner }) => {
  const [historyState, setHistoryState] = useState([]);
  const [nowGameState, setNowGameState] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);

  const bingo = (board) => {
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
  };

  const checkBoard = (row, col) => {
    if (nowGameState[row][col] || winner) return;

    const mark = historyState.length % 2 ? 'O' : 'X';
    const newGameState = _.cloneDeep(nowGameState);

    newGameState[row][col] = mark;

    setHistoryState([...historyState, nowGameState]);
    setNowGameState(newGameState);

    setWinner(bingo(newGameState));
  };

  const backsies = (num) => {
    const newGamesState = _.cloneDeep(historyState);
    setNowGameState(newGamesState[num]);
    setHistoryState(newGamesState.slice(0, num));
    setWinner('');
  };

  return (
    <div className="GameContainer">
      <GameBlocks nowGameState={nowGameState} checkBoard={checkBoard} />
      <BacksiesBoard historyState={historyState} backsies={backsies} />
    </div>
  );
};

export default GameContainer;
