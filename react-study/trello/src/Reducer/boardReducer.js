let initData = {
  users: [
    {
      id: 'aaaa',
      password: '111111',
    },
    {
      id: 'bbbb',
      password: '111111',
    },
  ],
  menuBoards: [
    {
      title: '오늘의 식단',
      menu: ['참치김밥', '치즈김밥', '라면'],
    },
    {
      title: '내일 식단',
      menu: ['라면땅', '제육볶음', '콜라'],
    },
    {
      title: '내일 식단',
      menu: [],
    },
    {
      title: '내일 식단',
      menu: [],
    },
  ],
  isLogin: false,
  loginId: '',
  inputState: {
    id: '',
    pass: '',
    board: '',
    menu: '',
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        isLogin: true,
        loginId: action.loginId,
        inputState: {
          ...state.inputState,
          id: '',
          pass: '',
        },
      };
    case 'LOG_OUT':
      return {
        ...state,
        isLogin: false,
        loginId: '',
      };
    case 'INSERT_BOARD':
      return {
        ...state,
        menuBoards: [...state.menuBoards, action.newBoard],
        inputState: {
          ...state.inputState,
          board: '',
        },
      };
    case 'DELETE_BOARD':
      return {
        ...state,
        menuBoards: [
          ...state.menuBoards.filter((_, i) => i !== action.deleteIndex),
        ],
      };
    case 'INPUT_MENU':
      const newState = {
        ...state,
        menuBoards: state.menuBoards.map((Board, i) => {
          if (action.boardIndex === i) {
            Board.menu = [...Board.menu, action.newMenu];
          }
          return Board;
        }),
        inputState: {
          ...state.inputState,
          inputMenu: '',
        },
      };
      action.setMenu('');

      return newState;

    case 'INPUT_CHANGE':
      return {
        ...state,
        inputState: {
          ...state.inputState,
          [action.inputName]: action.newInputData,
        },
      };

    default:
      return state;
  }
};

export { initData, reducer };
