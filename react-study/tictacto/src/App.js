/* eslint-disable function-paren-newline */
/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import * as _ from 'lodash';
import './App.css';

const ulStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  width: '350px',
  height: '300px',
};

const liStyle = {
  backgroundColor: 'white',
  width: '100px',
  height: '100px',
  border: 'solid',
  listStyle: 'none',
};

const gameTable = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

function App() {
  const [gamesState, setGamesState] = useState([]);
  const [nowGameState, setNowGameState] = useState(gameTable);
  const [winner, setWinner] = useState('');

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
    if (nowGameState[row][col]) return;
    if (winner) return;

    const mark = gamesState.length % 2 ? 'O' : 'X';
    const newGameState = _.cloneDeep(nowGameState);

    newGameState[row][col] = mark;

    setGamesState([...gamesState, nowGameState]);
    setNowGameState(newGameState);

    setWinner(bingo(newGameState));
  };

  const backsies = (num) => {
    const newGamesState = _.cloneDeep(gamesState);
    setNowGameState(newGamesState[num]);
    setGamesState(newGamesState.slice(0, num));
    setWinner('');
  };

  return (
    <>
      <strong>{winner ? `${winner}승리!` : 'tic-tac-tok 진행중'}</strong>
      <ul style={ulStyle}>
        {nowGameState.map((arr, i) =>
          arr.map((item, j) => (
            <li
              style={liStyle}
              onClick={() => checkBoard(i, j)}
              key={i * 10 + j}
            >
              {item}
            </li>
          )),
        )}
      </ul>
      {gamesState.map((game, i) => (
        <button type="button" onClick={() => backsies(i)}>
          {i + 1}번째 수로 무르기
        </button>
      ))}
    </>
  );
}

export default App;
