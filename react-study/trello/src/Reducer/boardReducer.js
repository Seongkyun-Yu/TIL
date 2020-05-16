let initData = {
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
  InputState: {
    InputId: '',
    InputPass: '',
    InputBoard: '',
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INSERT_BOARD':
      return {
        ...state,
        menuBoards: [...state.menuBoards, action.newBoard],
      };
    case 'DELETE_BOARD':
      return {
        ...state,
        menuBoards: [
          ...state.menuBoards.filter((_, i) => i !== action.deleteIndex),
        ],
      };
    default:
      return state;
  }
};

export { initData, reducer };
