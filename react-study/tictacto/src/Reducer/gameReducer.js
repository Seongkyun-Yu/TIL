const initData = {
  winner: '',
  history: [],
  nowGame: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_HISTORY':
      return {
        ...state,
        history: [...state.history, action.pastGame],
      };
    case 'SET_NOWGAME':
      return {
        ...state,
        nowGame: action.newGame,
      };
    case 'SET_WINNER':
      return {
        ...state,
        winner: action.winner,
      };
    case 'SET_BACKSIES':
      return {
        ...state,
        history: action.newHistoryGame,
      };
    default:
      return state;
  }
};

export { initData, reducer };
